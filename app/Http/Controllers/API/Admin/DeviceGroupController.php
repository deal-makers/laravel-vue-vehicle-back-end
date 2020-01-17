<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\DeviceGroup;
use Illuminate\Http\Request;

class DeviceGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $deviceGroups = DeviceGroup::all();

        return response()->json($deviceGroups,200);
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
            $newDeviceGroup->type = $request->type;
            $newDeviceGroup->name = $request->name;
            $newDeviceGroup->trigger_duration_ms = $request->trigger_duration_ms;
            $newDeviceGroup->time_between_trigger = $request->time_between_trigger;
            $newDeviceGroup->save();

            return response()->json([
                'Message' => 'Device group created successfully!'
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
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $editDeviceGroup = DeviceGroup::findOrFail($id);
            $editDeviceGroup->enabled = ($request->has('enabled')) ? $request->enabled : $editDeviceGroup->enabled;
            $editDeviceGroup->type = $request->type;
            $editDeviceGroup->name = $request->name;
            $editDeviceGroup->save();

            return response()->json([
                'Message' => 'Device group created successfully!'
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
                'Message' => 'Device group removed successfully!'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'Error' => $e->getMessage()
            ], $e->getCode());
        }
    }
}
