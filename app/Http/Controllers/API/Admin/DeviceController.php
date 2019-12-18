<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Device;
use Illuminate\Http\Request;

class DeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $devices = Device::all();

        return response()->json($devices, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $newDevice = new Device();
            $newDevice->name = $request->name;
            $newDevice->device_group_id = $request->device_group_id;
            $newDevice->device_rfid = $request->device_rfid;
            $newDevice->description = $request->description;
            $newDevice->save();

            return response()->json([
                'Message' => 'Device stored successfully!'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'Error' => $e->getMessage()
            ], $e->getCode());
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
        $device = Device::findOrFail($id);

        return response()->json($device,200);
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
            $device = Device::findOrFail($id);
            $device->name = $request->name;
            $device->device_group_id = $request->device_group_id;
            $device->device_rfid = $request->device_rfid;
            $device->description = $request->description;
            $device->save();

            return response()->json([
               'Message' => 'Device updated successfully!'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'Error' => $e->getMessage()
            ], $e->getCode());
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
            $device = Device::findOrFail($id);
            $device->delete();

            return response()->json([
                'Message' => 'Device removed successfully!'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'Error' => $e->getMessage()
            ], $e->getCode());
        }
    }
}
