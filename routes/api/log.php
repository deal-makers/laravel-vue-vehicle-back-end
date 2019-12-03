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

Route::prefix('logs')->group(function() {
        Route::post('get/{device_rfid}', 'LogController@getLogByDeviceRfid');
        Route::post('create/{deviceRfid}', 'LogController@storeLogData');
    });