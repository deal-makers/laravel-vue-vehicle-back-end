<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\DeviceAttribute;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $devices = Device::whereHas('DeviceGroup', function($q) {
            $q->whereHas('device_type', function($q) {
                $q->where('name', '=', 'rfid');
            });
        })
            ->with(['DeviceGroup'])
            ->get();

        return response()->json($devices, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:2',
            'description' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        try {
            $newDevice = new Device();
            $newDevice->name = $request->name;
            $newDevice->device_group_id = $request->device_group_id;
            $newDevice->description = $request->description;
            $newDevice->save();

            return response()->json([
                'Message' => 'Vehicle stored successfully!'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'Error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $device = Device::with('DeviceGroup')->findOrFail($id);

        return response()->json($device,200);
    }

    /**
     *  Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:2',
            'description' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        try {
            $device = Device::findOrFail($id);
            $device->device_group_id = $request->device_group_id;
            $device->name = $request->name;
            $device->description = $request->description;
            $device->save();

            return response()->json([
               'Message' => 'Vehicle updated successfully!'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'Error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        try {
            $device = Device::findOrFail($id);
            $device->delete();

            return response()->json([
                'Message' => 'Vehicle removed successfully!'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'Error' => $e->getMessage()
            ], $e->getCode());
        }
    }
}
