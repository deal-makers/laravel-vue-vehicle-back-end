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

Route::prefix('alerts')->group(function () {
    Route::post('create', 'API\RPI\AlertController@store');
});
