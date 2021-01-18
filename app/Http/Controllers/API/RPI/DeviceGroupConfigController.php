<?php

namespace App\Http\Controllers\API\RPI;

use App\Http\Controllers\Controller;
use App\Models\DeviceGroup;
use App\Models\DeviceType;
use Illuminate\Http\Request;

class DeviceGroupConfigController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getConfig(Request $request)
    {
        if (!DeviceType::doesTypeExist($request->type)) {
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
        try {
            foreach($deviceGroups as $dg) {
                $response['device_groups'][] = [
                    'id' => $dg->id,
                    'name' => $dg->name,
                    'enabled' => $dg->enabled,
                    'type' => $dg->type,
                    'trigger_duration_seconds' => $dg->trigger_duration_seconds,
                    'time_between_trigger_seconds' => $dg->time_between_trigger,
                    'devices' => $dg->devices->map(function ($item,$index) {
                        return [
                            'name' => $item['name'],
                            'device_group_id' => $item['device_group_id'],
                            'description' => $item['description']
                        ];
                    })
                ];
            }
            return response()->json($response, 200);
        } catch (\Exception $e) {
            return response()->json([
                "Errors" => $e->getMessage()
            ], $e->getCode());
        }
    }
}
