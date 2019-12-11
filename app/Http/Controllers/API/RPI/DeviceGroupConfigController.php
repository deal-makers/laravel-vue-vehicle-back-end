<?php

namespace App\Http\Controllers\API\RPI;

use App\Http\Controllers\Controller;
use App\Models\DeviceGroup;
use Illuminate\Http\Request;

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
                'id' => $dg->id,
                'enabled' => $dg->enabled,
                'type' => $dg->type,
                'trigger_duration_ms' => $dg->trigger_duration_ms,
                'time_between_trigger_seconds' => $dg->time_between_trigger,
                'devices' => []
            ];
            foreach($dg->devices() as $groupDevice) {
                $response['device_groups'][]['devices'] = ['bla' => 'blaa'];
            }
        }

        return response()->json($response);

        return response()->json([
            "description" => $description,
            "device_groups" => [
                [
                    "id" => 123,
                    "enabled" => 1,
                    "type" => "rfid_trigger",
                    "name" => "Large Forklifts",
                    "trigger_duration_ms" => 5000,
                    "time_between_trigger_seconds" => 86400,
                    "devices" => [[
                        "name" => "Blue forklift #1",
                        "rfid" => "293012938209198321038"
                    ],[
                        "name" => "Blue forklift #2",
                        "rfid" => "102938283850391832938"
                    ]]
                ],
                [
                    "id" => 124,
                    "enabled" => 1,
                    "type" => "rfid_trigger",
                    "name" => "Scissor Lifts",
                    "trigger_duration_ms" => 9000,
                    "time_between_trigger_seconds" => 86400,
                    "devices" => [[
                        "name" => "Lift #1",
                        "rfid" => "873274789238498748378"
                    ],
                        [
                            "name" => "Lift #35",
                            "rfid" => "129388380298483747437"
                        ]]
                ]
            ]
        ]);
    }
}
