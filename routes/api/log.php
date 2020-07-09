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

use Illuminate\Support\Facades\Route;

Route::prefix('logs')->middleware('allowed')->group(function() {
    Route::get('get/{device_id}', 'API\RPI\LogController@getLogByDeviceId');
    Route::post('create', 'API\RPI\LogController@storeLogData');
});
