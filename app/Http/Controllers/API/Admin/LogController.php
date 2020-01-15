<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Log;
use Carbon\Carbon;
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
        $dateFrom = ($request->date_from !== null)
            ? Carbon::parse($request->date_from)->format('Y-m-d H:i:s')
            : Carbon::now()->subYears(100);

        $dateTo = ($request->date_to !== null)
            ? Carbon::parse($request->date_to)->format('Y-m-d H:i:s')
            : Carbon::now();

        $deviceGroup = $request->device_group_id;
        $device = $request->device_id;

        if ($deviceGroup === null) {
            $logs = Log::where('created_at', '>=', $dateFrom)
                ->where('created_at', '<=', $dateTo)
                ->get();
        } elseif($deviceGroup !== null || $device === null) {
            $logs = Log::where('device_group_id', intval($deviceGroup))
                ->where('created_at', '>=', $dateFrom)
                ->where('created_at', '<=', $dateTo)
                ->get();
        } else {
            $logs = Log::where('device_group_id', intval($deviceGroup))
                ->where('device_id', intval($device))
                ->where('created_at', '>=', $dateFrom)
                ->where('created_at', '<=', $dateTo)
                ->get();
        }

        return response()->json($logs, 200);
    }
}
