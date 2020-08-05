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
        // Handle date times if selected or not
        $dateFrom = $request->filled('date_from') ? $request->input('date_from') : Carbon::today();
        $dateTo = $request->filled('date_to') ? $request->input('date_to') : Carbon::tomorrow();

        $device_group = $request->input('device_group_id');
        $device_id = $request->input('device_id');

        $query = Log::whereBetween('reported_at', [$dateFrom, $dateTo])
            ->with(['device.deviceGroup', 'reportedBy']);

        if ($device_group != null) {
            $query = $query->whereHas('device.deviceGroup', function ($q) use ($device_group) {
                $q->where('device_groups.id', $device_group);
            });
        }

        if ($device_id != null) {
            $query = $query->where('device_id', $device_id);
        }

        return response()->json([
            'logs' => $query->get(),
            'device_groups' => DeviceGroup::where('enabled', 1)->get()
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
