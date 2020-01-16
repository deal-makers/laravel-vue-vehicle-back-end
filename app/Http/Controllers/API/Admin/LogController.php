<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\DeviceGroup;
use App\Models\Log;
use Carbon\Carbon;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;

class LogController extends Controller
{
    /**
     * Search for Logs based on filters
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function searchLogs(Request $request)
    {
        // Handle datetimes if selected or not
        $dateFrom = ($request->date_from !== null)
            ? Carbon::parse($request->date_from)->format('Y-m-d H:i:s')
            : Carbon::now()->subYears(100);

        $dateTo = ($request->date_to !== null)
            ? Carbon::parse($request->date_to)->format('Y-m-d H:i:s')
            : Carbon::now();

        // store parameters
        $device_group = $request->device_group_id;
        $device = $request->device_id;

        // get enabled Device Grooups and Devices which are not RPi's
        $deviceGroups = DeviceGroup::where('enabled', 1)->get();
        $devices = Device::where('name', 'RPi')->pluck('id');

        if ($device_group === null) {

            $logs = Log::whereNotIn('device_id', $devices)
                ->where('created_at', '>=', $dateFrom)
                ->where('created_at', '<=', $dateTo)
                ->with('device')
                ->with('device.deviceGroup')
                ->get();

        } elseif($device_group !== null && $device === null) {

            $logs = Log::whereNotIn('device_id', $devices)
                ->where('created_at', '>=', $dateFrom)
                ->where('created_at', '<=', $dateTo)
                ->with('device')
                ->with('device.deviceGroup')
                ->whereHas('device.deviceGroup', function($q) use ($device_group){
                    $q->where('id', $device_group);
                })
                ->get();

        } else {

            $logs = Log::whereNotIn('device_id', $devices)
                ->where('device_id', intval($device))
                ->where('created_at', '>=', $dateFrom)
                ->where('created_at', '<=', $dateTo)
                ->with('device')
                ->with('device.deviceGroup')
                ->whereHas('device.deviceGroup', function($q) use ($device_group){
                    $q->where('id', $device_group);
                })
                ->get();

        }

        return response()->json([
            'logs' => $logs,
            'device_groups' => $deviceGroups
        ], 200);
    }


    public function export(Request $request, $type)
    {

    }
}
