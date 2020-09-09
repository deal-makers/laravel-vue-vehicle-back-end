<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\DeviceGroup;
use Illuminate\Http\Request;

class VehicleGroupController extends Controller
{

    private $device_type_id = '1'; // TODO: Not hard code this.

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $deviceGroups = DeviceGroup::whereHas('device_type', function($q) {
            $q->where('name', '=', 'rfid');
        })->get();

        return response()->json($deviceGroups, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      //TODO: trigger not saving
        try {
            $newDeviceGroup = new DeviceGroup();
            $newDeviceGroup->enabled = ($request->has('enabled')) ? $request->enabled : false;
            $newDeviceGroup->device_type_id = $this->device_type_id;
            $newDeviceGroup->name = $request->name;
            $newDeviceGroup->trigger_duration_seconds = $request->trigger_duration_seconds;
            $newDeviceGroup->time_between_trigger = $request->time_between_trigger;
            $newDeviceGroup->save();

            return response()->json([
                'Message' => 'Vehicle group created successfully!'
            ],200);

        } catch(\Exception $e) {
            return response()->json([
                'Error' =>  $e->getMessage()
            ],$e->getCode());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $deviceGroup = DeviceGroup::findOrFail($id);

        return response()->json($deviceGroup,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $editDeviceGroup = DeviceGroup::findOrFail($id);
            $editDeviceGroup->enabled = ($request->has('enabled')) ? $request->enabled : $editDeviceGroup->enabled;
            //$editDeviceGroup->device_type_id = $this->device_type_id;
            $editDeviceGroup->name = $request->name;
            $editDeviceGroup->trigger_duration_seconds = $request->trigger_duration_seconds;
            $editDeviceGroup->time_between_trigger = $request->time_between_trigger;
            $editDeviceGroup->save();

            return response()->json([
                'Message' => 'Vehicle group updated successfully!'
            ],200);

        } catch(\Exception $e) {
            return response()->json([
                'Error' =>  $e->getMessage()
            ],$e->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $device = DeviceGroup::findOrFail($id);
            $device->delete();

            return response()->json([
                'Message' => 'Vehicle group removed successfully!'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'Error' => $e->getMessage()
            ], $e->getCode());
        }
    }
}
