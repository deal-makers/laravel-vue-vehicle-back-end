<?php
/*
|--------------------------------------------------------------------------
| Admin API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register Admin Dashboard Config API routes for your application.
| Look in app/Providers/RouteServiceProvider for more info
|
*/


use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function() {
    /*
     * DEVICE management routes
     */
    Route::get('devices', 'DeviceController@index');
    Route::get('device/{id}', 'DeviceController@show');
    Route::post('device/store', 'DeviceController@store');
    Route::put('device/update/{id}', 'DeviceController@update');
    Route::delete('device/delete/{id}', 'DeviceController@destroy');
    Route::get('devices/{device_group}', 'DeviceController@getDevicesByGroup');
    Route::post('device/renew_api_token', 'DeviceController@renewApiToken');

    /*
     * DEVICE GROUPS management routes
     */
    Route::get('device_groups', 'DeviceGroupController@index');
    Route::get('device_group/{id}', 'DeviceGroupController@show');
    Route::post('device_group/store', 'DeviceGroupController@store');
    Route::put('device_group/update/{id}', 'DeviceGroupController@update');
    Route::delete('device_group/delete/{id}', 'DeviceGroupController@destroy');

    Route::get('logs', 'LogController@searchLogs');

    Route::prefix('export')->group(function () {
        Route::get('logs/{type}', 'LogController@export');
    });

    /*
     * ROLES management routes
     */
    Route::get('roles', 'RolesController@index');

    /*
     * REMOTE IOT DEVICES management routes
     */
    Route::apiResource('remote_devices', 'RemoteDevicesController')->except(['store', 'update']);
    Route::match(['post', 'put'], 'remote_devices/{id?}', 'RemoteDevicesController@save');
});
