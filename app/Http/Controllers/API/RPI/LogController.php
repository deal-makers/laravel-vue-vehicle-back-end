<?php

namespace App\Http\Controllers\API\RPI;

use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\DeviceAttribute;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Log;
use Illuminate\Support\Facades\Validator;

class LogController extends Controller
{
    /**
     * Get Device Log file
     *
     * @param $device_id
     * @param Request $request
     * @return JsonResponse
     *
     **/
    public function getLogByDeviceId(Request $request, $device_id)
    {
        try {
            $logs = Log::where('device_id', $device_id)->orderBy('created_at', 'DESC')->get();

            if (is_null($logs) || count($logs) < 1) {
                return response()->json([
                    'Message' => 'No data.'
                ], 404);
            } else {
                return response()->json(['Logs:', $logs], 201);
            }

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error handling request!',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store device Log file
     *
     * @param Request $request
     * @return JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function storeLogData(Request $request): JsonResponse
    {
        $this->validate($request, [
            'data.*.device_id' => 'required|numeric',
            'data.*.device_group_id' => 'required|numeric',
            'data.*.event_description' => 'required|string',
            'data.*.event_time' => 'required|date'
        ]);
        // Getting the request sender's ID
        $reportedBy = DeviceAttribute::reportedBy($request->api_token);

        foreach ($request->get('data') as $item) {
            $newLog = new Log();
            $newLog->device_id = @$item['device_id'];
            $newLog->event_desc = @$item['event_description'];
            $newLog->reported_by = $reportedBy;
            $newLog->reported_at = \Carbon\Carbon::parse(@$item['event_time']);
            $newLog->save();
        }

        return response()->json(['message' => 'Logs saved successfully!'], 201);
    }
}
