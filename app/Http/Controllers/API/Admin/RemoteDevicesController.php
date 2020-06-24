<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\RemoteIOTDevice;
use Illuminate\Http\Request;

class RemoteDevicesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(RemoteIOTDevice::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'device_id' => 'required',
            'name' => 'required|min:3',
            'auth_code' => 'required|min:6',
            'device_group_id' => 'required|exists:device_groups,id',
            'role_id' => 'required|exists:roles,id',
            'active' => 'required|boolean'
        ]);

        try {
            $newDevice = new RemoteIOTDevice();
            $newDevice->name = $request->name;
            $newDevice->device_id = $request->device_id;
            $newDevice->device_group_id = $request->device_group_id;
            $newDevice->auth_code = $request->auth_code;
            $newDevice->description = $request->description;
            $newDevice->active = $request->active;
            $newDevice->save();

            $newDevice->roles()->attach($request->role_id);

            return response()->json([
                'Message' => 'Remote IoT Device stored successfully!'
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
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
