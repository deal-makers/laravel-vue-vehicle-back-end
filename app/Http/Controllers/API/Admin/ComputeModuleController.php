<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\DeviceAttribute;
use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ComputeModuleController extends Controller
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
                $q->where('name', '=', 'compute-module');
            });
        })
            ->with(['DeviceGroup', 'User'])
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
           'device_id' => 'required',
           'name' => 'required|min:3'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        try {
            $newDevice = new Device();
            $newDevice->name = $request->name;
            $newDevice->description = $request->description;
            $newDevice->save();

            if($request->has('api_token')) {
                $addAttribute = new DeviceAttribute();
                $addAttribute->device_id = $newDevice->id;
                $addAttribute->name = 'api_token';
                $addAttribute->value = Device::generateApiToken();
                $addAttribute->save();
            }

            return response()->json([
                'Message' => 'Device stored successfully!'
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
        $device = Device::with('User')->findOrFail($id);

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
            'name' => 'required|min:3'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        try {
            $device = Device::findOrFail($id);
            $device->name = $request->name;
            $device->description = $request->description;
            $device->save();

            if ($request->has('refresh_api_key')) {
                $user = User::findOrFail($device->user_id);
                $user->name = \Str::slug($device->name);
                $user->api_token = \Str::random(\Config::get('auth.api_token_length'));
                $user->save();
            }

            return response()->json([
               'Message' => 'Device updated successfully!'
            ]+$user->toArray(), 200);
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
                'Message' => 'Device removed successfully!'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'Error' => $e->getMessage()
            ], $e->getCode());
        }
    }

    /**
     * @param $deviceGroup
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDevicesByGroup($deviceGroup)
    {
        try {
            $devices = Device::where('device_group_id', intval($deviceGroup))->get();

            return response()->json($devices, 200);

        } catch(\Exception $e) {

            return response()->json([
                'Error' => $e->getMessage()
            ], $e->getCode());
        }
    }

    public function generateApiTokenForDevice($device_id, $token)
    {
        $setToken = new DeviceAttribute();
        $setToken->device_id = $device_id;
        $setToken->name = 'api_token';
        $setToken->value = $token;
        $setToken->save();

        return $token;
    }

    public function renewApiToken(Request $request)
    {
        $device = Device::where('device_id', $request->device_id)->first();

        if(!$device) {
            return response()->json([
                'Message:' => 'No devices found for the given parameters.'
            ], 403);
        }

        $newToken = Device::generateApiToken();

        $attribute = DeviceAttribute::where('device_id', $device->id)->where('name', 'api_token')->first();

        if (!$attribute) {
            try {
                $newToken = $this->generateApiTokenForDevice($device->id, $newToken);

                return $newToken;

            } catch (\Exception $e) {
                return response()->json([
                    'Error:' => $e->getMessage()
                ], 501);
            }

        } else {
            try {
                $attribute->value = $newToken;
                $attribute->save();

                return $newToken;

            } catch (\Exception $e) {
                return response()->json([
                    'Error:' => $e->getMessage()
                ], 501);
            }
        }
    }
}
