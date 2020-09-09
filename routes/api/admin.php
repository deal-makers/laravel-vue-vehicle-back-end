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

    /*
     * SANITATION SECTION
     */

    Route::get('vehicle_groups', 'VehicleGroupController@index');
    Route::get('vehicle_group/{id}', 'VehicleGroupController@show');
    Route::post('vehicle_group/store', 'VehicleGroupController@store');
    Route::put('vehicle_group/update/{id}', 'VehicleGroupController@update');
    Route::delete('vehicle_group/delete/{id}', 'VehicleGroupController@destroy');

    Route::get('vehicles', 'VehicleController@index');
    Route::get('vehicle/{id}', 'VehicleController@show');
    Route::post('vehicle/store', 'VehicleController@store');
    Route::put('vehicle/update/{id}', 'VehicleController@update');
    Route::delete('vehicle/delete/{id}', 'VehicleController@destroy');

    Route::get('compute_modules', 'ComputeModuleController@index');
    Route::get('compute_module/{id}', 'ComputeModuleController@show');
    Route::post('compute_module/store', 'ComputeModuleController@store');
    Route::put('compute_module/update/{id}', 'ComputeModuleController@update');
    Route::delete('compute_module/delete/{id}', 'ComputeModuleController@destroy');
    Route::get('compute_modules/{device_group}', 'ComputeModuleController@getDevicesByGroup');
    Route::post('compute_module/renew_api_token', 'ComputeModuleController@renewApiToken');

    /*
     * KIOSKS SECTION
     */
    Route::prefix('kiosk')->group(function() {
        Route::get('tablets', 'TabletController@index');
    });

    /*
     * REPORTS SECTION
     */
    Route::prefix('reports')->group(function() {
        Route::get('status', 'ReportStatusController@index');
        Route::get('sanitation-activity', 'SanitationActivityController@index');
    });
});
