<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Device;

class ReportStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $data = Device::distinct()
            ->whereHas('DeviceGroup', function($q) {
                $q->whereHas('device_type', function($q) {
                    $q->where('name', '=', 'compute-module');
                });
            })
            ->with(['pulses', 'DeviceGroup', 'latestPulse'])
            ->get();

        return response()->json($data, 200);
    }
}
