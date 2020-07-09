<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RemoteDeviceStoreRequest;
use App\Models\Device;

/**
 * Class RemoteDevicesController
 * @package App\Http\Controllers\API\Admin
 */
class RemoteDevicesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $devices = Device::has('deviceType')
            ->with(['attributes:device_id,name,value', 'roles:id,name', 'deviceGroup:id,name'])
            ->get()->map(function ($device) {
                return [
                    'id' => $device->id,
                    'device_id' => $device->device_id,
                    'name' => $device->name,
                    'description' => $device->description,
                    'device_group' => $device->deviceGroup->name,
                    'role' => $device->roles[0]->name,
                    'auth_code' => $device->attributes->firstWhere('name', 'auth_code')->value,
                    'active' => (boolean)$device->attributes->firstWhere('name', 'active')->value
                ];
            });

        return response()->json($devices);
    }

    /**
     * Store a newly created resource in storage Or
     * Update the specified resource in storage.
     *
     * @param RemoteDeviceStoreRequest $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function save(RemoteDeviceStoreRequest $request, $id = null)
    {
        $request->save($id)
            ->roles()->sync($request->role_id);

        return response()->json(['message' => "Remote IoT Device saved successfully!"]);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $device = Device::with(['attributes:device_id,name,value', 'roles:id'])->findOrFail($id);

        $device->role_id = optional($device->roles->first())->id;

        foreach ($device->attributes as $attribute){
            $device->{$attribute->name} = $attribute->value;
        }

        unset($device->roles, $device->attributes);

        return response()->json($device);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Device::findOrFail($id)->delete();

        return response()->json(['message' => 'Remote IoT Device removed successfully!']);
    }
}
