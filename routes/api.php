<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\API\AuthController;

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
Route::post('password/forgot', [AuthController::class, 'postForgotPassword']);
Route::post('password/reset', [AuthController::class, 'postResetPassword']);
// Send reset password mail
Route::post('reset-password', [AuthController::class, 'sendPasswordResetLink']);

// handle reset password form process
Route::post('reset/password', [AuthController::class, 'callResetPassword']);
Route::middleware('auth:api')->group(function () {

    Route::post('logout', [Auth\LoginController::class, 'logout'])->name('logout');

});
