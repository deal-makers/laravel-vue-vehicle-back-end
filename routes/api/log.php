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

Route::prefix('logs')->middleware('allowed')->group(function() {
        Route::post('get/{device_id}', 'LogController@getLogByDeviceRfid');
        Route::post('create', 'LogController@storeLogData');
    });
