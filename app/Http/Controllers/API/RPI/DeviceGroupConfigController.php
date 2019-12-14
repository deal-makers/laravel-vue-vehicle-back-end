<?php

namespace App\Http\Controllers\API\RPI;

use App\Http\Controllers\Controller;
use App\Models\DeviceGroup;
use Illuminate\Http\Request;
use function foo\func;

class DeviceGroupConfigController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getConfig(Request $request)
    {
        if ($request->type != 'rfid_trigger') {
            return response()->json([
                'message' => 'Unknown device_group type ' . $request->type,
                'status_code' => 404
            ], 404);
        }

        $description = 'Configuration data for device groups.';
        $deviceGroups = DeviceGroup::all();

        $response = [
            'description' => $description,
            'device_groups' => []
        ];
        foreach($deviceGroups as $dg) {
            $response['device_groups'][] = [
                'name' => $dg->name,
                'enabled' => $dg->enabled,
                'type' => $dg->type,
                'trigger_duration_ms' => $dg->trigger_duration_ms,
                'time_between_trigger_seconds' => $dg->time_between_trigger,
                'devices' => [$dg->devices->map(function ($item,$index) {
                    return [
                        'name' => $item['name'],
                        'device_group_id' => $item['device_group_id'],
                        'device_rfid' => $item['device_rfid'],
                        'description' => $item['description']
                    ];
                })]
            ];
        }

        return response()->json($response, 200);

    }
}
