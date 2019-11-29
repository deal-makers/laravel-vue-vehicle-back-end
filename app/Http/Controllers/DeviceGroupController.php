<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DeviceGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $deviceGroups = DeviceGroup::all();

        return $deviceGroups;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newDeviceGroup = new DeviceGroup();
        $newDeviceGroup->enabled = ($request->enabled === true || $request->enabled === false) ? $request->enabled : false;
        $newDeviceGroup->type = $request->type;
        $newDeviceGroup->name = $request->name;
        $newDeviceGroup->save();

        return true;
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
        $editDeviceGroup = DeviceGroup::findOrFail($id);
        $editDeviceGroup->enabled = ($request->enabled === true || $request->enabled === false) ? $request->enabled : $editDeviceGroup->enabled;
        $editDeviceGroup->type = $request->type;
        $editDeviceGroup->name = $request->name;
        $editDeviceGroup->save();

        return true;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deviceGroup = DeviceGroup::findOrFail($id);
        $deviceGroup->delete();

        return true;
    }
}
