<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\DeviceGroup;
use App\Models\Log;
use App\Utilities\LogExporter;
use Carbon\Carbon;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\Exception;

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
            ? Carbon::createFromTimeString($request->date_from)->setHour(0)->setMinute(0)->setSecond(0)
            : Carbon::now()->subYears(100);

        $dateTo = ($request->date_to !== null)
            ? Carbon::createFromTimeString($request->date_to)->setHour(23)->setMinute(59)->setSecond(59)
            : Carbon::now();

        // store parameters
        $device_group = $request->device_group_id;
        $device = $request->device_id;

        // get enabled Device Grooups and Devices which are not RPi's
        $deviceGroups = DeviceGroup::where('enabled', 1)->get();
        $devices = Device::where('name', 'RPi')->pluck('id');

        if ($device_group === null) {

            $logs = Log::whereNotIn('device_id', $devices)
                ->where('reported_at', '>=', $dateFrom)
                ->where('reported_at', '<=', $dateTo)
                ->with('device')
                ->with('device.deviceGroup')
                ->get();

        } elseif($device_group !== null && $device === null) {

            $logs = Log::whereNotIn('device_id', $devices)
                ->where('reported_at', '>=', $dateFrom)
                ->where('reported_at', '<=', $dateTo)
                ->with('device')
                ->with('device.deviceGroup')
                ->whereHas('device.deviceGroup', function($q) use ($device_group){
                    $q->where('id', $device_group);
                })
                ->get();

        } else {

            $logs = Log::whereNotIn('device_id', $devices)
                ->where('device_id', intval($device))
                ->where('reported_at', '>=', $dateFrom)
                ->where('reported_at', '<=', $dateTo)
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
        $csv = new LogExporter($request->date_from, $request->date_to, $request->device_group_id, $request->device_id);

        try {
            return $csv->exportCsv($request->logs);
        } catch (Exception $e) {
            return response()->json([
                'Error' => $e->getMessage()
            ], 500);
        }
    }
}
