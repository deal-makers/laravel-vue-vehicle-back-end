<?php
/*
|--------------------------------------------------------------------------
| Config API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register Device Config API routes for your application.
| Look in app/Providers/RouteServiceProvider for more info
|
*/

use Illuminate\Support\Facades\Route;

Route::prefix('config')->group(function() {

    Route::get('device_group/{type}', 'API\RPI\DeviceGroupConfigController@getConfig');

});
