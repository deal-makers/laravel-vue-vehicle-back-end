<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RemoteDeviceStoreRequest;
use App\Models\RemoteIOTDevice;

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
        return response()->json(RemoteIOTDevice::with(['roles:id,name', 'device_group:id,name'])->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param RemoteDeviceStoreRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(RemoteDeviceStoreRequest $request)
    {
        $request->save()->roles()->attach($request->role_id);

        return response()->json(['message' => 'Remote IoT Device stored successfully!']);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $device = RemoteIOTDevice::with('roles')->findOrFail($id);

        $device->role_id = optional($device->roles->first())->id;

        return response()->json($device);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param RemoteDeviceStoreRequest $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(RemoteDeviceStoreRequest $request, $id)
    {
        $request->update($id)->roles()->sync($request->role_id);

        return response()->json(['message' => 'Remote IoT Device updated successfully!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        RemoteIOTDevice::findOrFail($id)->delete();

        return response()->json(['message' => 'Remote IoT Device removed successfully!']);
    }
}
