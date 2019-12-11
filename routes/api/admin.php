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


Route::prefix('admin')->group(function() {
    /*
     * DEVICE management routes
     */
    Route::get('devices', 'API\Admin\DeviceController@index');
    Route::get('device/{id}', 'API\Admin\DeviceController@getDevice');
    Route::post('test', 'API\Admin\DeviceController@create');
    Route::post('test1', 'API\Admin\DeviceController@update');
    Route::delete('test3', 'API\Admin\DeviceController@delete');

    /*
     * DEVICE GROUPS management routes
     */
    Route::get('device_groups', 'API\Admin\DeviceGroupController@index');
    Route::get('device_group/{id}', 'API\Admin\DeviceGroupController@getDeviceGroup');
    Route::post('tes', 'API\Admin\DeviceGroupController@create');
    Route::post('tes1', 'API\Admin\DeviceGroupController@update');
    Route::delete('tes3', 'API\Admin\DeviceGroupController@delete');
});
