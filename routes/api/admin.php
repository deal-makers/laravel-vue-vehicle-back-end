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


use App\Http\Controllers\API\Admin\VehicleGroupController;
use App\Http\Controllers\API\Admin\DeviceController;
use App\Http\Controllers\API\Admin\DeviceGroupController;
use App\Http\Controllers\API\Admin\RemoteDevicesController;
use App\Http\Controllers\API\Admin\VehicleController;
use App\Http\Controllers\API\Admin\ComputeModuleController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function() {
    /*
     * DEVICE management routes
     */
    Route::get('devices', [DeviceController::class, 'index']);
    Route::get('device/{id}', [DeviceController::class, 'show']);
    Route::post('device/store', [DeviceController::class, 'store']);
    Route::put('device/update/{id}', [DeviceController::class, 'update']);
    Route::delete('device/delete/{id}', [DeviceController::class, 'destroy']);
    Route::get('devices/{device_group}', [DeviceController::class, 'getDevicesByGroup']);
    Route::post('device/renew_api_token', [DeviceController::class, 'renewApiToken']);

    /*
     * DEVICE GROUPS management routes
     */
    Route::get('device_groups', [DeviceGroupController::class, 'index']);
    Route::get('device_group/{id}', [DeviceGroupController::class, 'show']);
    Route::post('device_group/store', [DeviceGroupController::class, 'store']);
    Route::put('device_group/update/{id}', [DeviceGroupController::class, 'update']);
    Route::delete('device_group/delete/{id}', [DeviceGroupController::class, 'destroy']);

    Route::get('logs', [LogController::class, 'searchLogs']);

    Route::prefix('export')->group(function () {
        Route::get('logs/{type}', 'LogController@export');
    });

    /*
     * ROLES management routes
     */
    Route::get('roles', [RolesController::class, 'index']);

    /*
     * REMOTE IOT DEVICES management routes
     */
    Route::apiResource('remote_devices', RemoteDevicesController::class)->except(['store', 'update']);
    Route::match(['post', 'put'], 'remote_devices/{id?}', [RemoteDevicesController::class, 'save']);

    /*
     * SANITATION SECTION
     */

    Route::get('vehicle_groups', [VehicleGroupController::class, 'index']);
    Route::get('vehicle_group/{id}', [VehicleGroupController::class, 'show']);
    Route::post('vehicle_group/store', [VehicleGroupController::class, 'store']);
    Route::put('vehicle_group/update/{id}', [VehicleGroupController::class, 'update']);
    Route::delete('vehicle_group/delete/{id}', [VehicleGroupController::class, 'destroy']);

    Route::get('vehicles', [VehicleController::class, 'index']);
    Route::get('vehicle/{id}', [VehicleController::class, 'show']);
    Route::post('vehicle/store', [VehicleController::class, 'store']);
    Route::put('vehicle/update/{id}', [VehicleController::class, 'update']);
    Route::delete('vehicle/delete/{id}', [VehicleController::class, 'destroy']);

    Route::get('compute_modules', [ComputeModuleController::class, 'index']);
    Route::get('compute_module/{id}', [ComputeModuleController::class, 'show']);
    Route::post('compute_module/store', [ComputeModuleController::class, 'store']);
    Route::put('compute_module/update/{id}', [ComputeModuleController::class, 'update']);
    Route::delete('compute_module/delete/{id}', [ComputeModuleController::class, 'destroy']);
    Route::get('compute_modules/{device_group}', [ComputeModuleController::class, 'getDevicesByGroup']);
    Route::post('compute_module/renew_api_token', [ComputeModuleController::class, 'renewApiToken']);

    /*
     * KIOSKS SECTION
     */
    Route::prefix('kiosk')->group(function() {
        Route::get('tablets', [TabletController::class, 'index']);
    });

    /*
     * REPORTS SECTION
     */
    Route::prefix('reports')->group(function() {
        Route::get('status', [ReportStatusController::class, 'index']);
        Route::get('sanitation-activity', [SanitationActivityController::class, 'index']);
    });
});
