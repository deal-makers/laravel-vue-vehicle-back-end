<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;

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
Route::post('login', [LoginController::class, 'login']);

// Password Reset Routes...
Route::get('password/reset', [ForgotPasswordController::class, 'showLinkRequestForm']);
Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail']);
Route::get('password/reset/{token}', [ResetPasswordController::class, 'showResetForm']);
Route::post('password/reset', [ResetPasswordController::class, 'reset']);

Route::middleware('auth:api')->group(function () {

    Route::post('logout', [Auth\LoginController::class, 'logout'])->name('logout');

});
