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

	    	if(is_null($logs) || count($logs) < 1) {
	    		return response()->json([
	    			'Message' => 'No data.'
	    		], 404);
	    	} else {
	    		return response()->json(['Logs:', $logs], 201);
	    	}

    	} catch(\Exception $e) {
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
	*
	**/
    public function storeLogData(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'device_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'Errors' => $validator->errors()
            ], 400);
        }

        // Getting the request sender's ID
        $reportedBy = DeviceAttribute::where('value', $request->api_token)->pluck('device_id');

    	try {
            $newLog = new Log();
            $newLog->device_id = $request->json('device_id');
            $newLog->event_desc = $request->json('event_description');
            $newLog->reported_by = $reportedBy[0];
            $newLog->reported_at = ($request->json('event_time')) ? \Carbon\Carbon::parse($request->json('event_time')) : null;
            $newLog->save();

	    	return response()->json([
    			'message' => 'Log saved successfully!',
    			'status_code' => 201
    		], 201);

	    } catch(\Exception $e) {
	    	return response()->json([
	    		'message' => 'Log not saved!',
	    		'error' => $e->getMessage()
	    	], 500);
	    }
    }
}
