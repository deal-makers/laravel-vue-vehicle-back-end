<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\DeviceAttribute;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
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
            $newDevice->device_id = $request->device_id;
            $newDevice->device_group_id = $request->device_group_id;
            $newDevice->device_rfid = $request->device_rfid;
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
        $device = Device::with('attributes')->findOrFail($id);
        $attr = [];

        foreach ($device->attributes as $key => $value) {
            $attr[$value->name] = $value->value;
        }

        $device['attrr'] = $attr;

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
            'device_id' => 'required',
            'name' => 'required|min:3'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        try {
            $device = Device::findOrFail($id);
            $device->name = $request->name;
            $device->device_id = $request->device_id;
            $device->device_group_id = $request->device_group_id;
            $device->description = $request->description;
            $device->save();

            foreach ($request->attrr as $key => $value) {
                $atr = DeviceAttribute::where('device_id', $id)->where('name', $key)->first();
                $atr->value = $value;
                $atr->save();
            }

            return response()->json([
               'Message' => 'Device updated successfully!'
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
