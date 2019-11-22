<?php
/*
|--------------------------------------------------------------------------
| Log API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register Log API routes for your application.
| Look in app/Providers/RouteServiceProvider for more info
|
*/

Route::prefix('v1/logs')->group(function() {
        Route::get('get/{device_rfid}', 'LogController@getLogByDeviceRfid');
        Route::post('create/{deviceRfid}', 'LogController@storeLogData');
    });