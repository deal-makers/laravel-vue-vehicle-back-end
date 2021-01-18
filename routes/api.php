<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Authentication Routes...
Route::post('login', [Auth\LoginController::class, 'login']);

// Password Reset Routes...
Route::get('password/reset', [Auth\ForgotPasswordController::class, 'showLinkRequestForm']);
Route::post('password/email', [Auth\ForgotPasswordController::class, 'sendResetLinkEmail']);
Route::get('password/reset/{token}', [Auth\ResetPasswordController::class, 'showResetForm']);
Route::post('password/reset', [Auth\ResetPasswordController::class, 'reset']);

Route::middleware('auth:api')->group(function () {

    Route::post('logout', [Auth\LoginController::class, 'logout'])->name('logout');

});
