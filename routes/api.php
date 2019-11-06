<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('config', function (Request $request) {

    return response()->json([
          "description" => "",
          "device_groups" => [
              [
                "id" => 123,
                "enabled" => 1,
                "type" => "rfid_trigger",
                "name" => "Large Forklifts",
                "options" => [
                    "trigger_duration_ms" => 5000,
                    "time_between_trigger_seconds" => 86400
                ],
                "devices" => [
                    "name" => "Blue forklift #1",
                    "rfid" => "293012938209198321038"
                ],[
                    "name" => "Blue forklift #2",
                    "rfid" => "102938283850391832938"
                ]
              ],
              [
                "id" => 124,
                "enabled" => 1,
                "type" => "rfid_trigger",
                "name" => "Scissor Lifts",
                "options" => [
                    "trigger_duration_ms" => 9000,
                    "time_between_trigger_seconds" => 86400
                ],
                "devices" => [
                    "name" => "Lift #1",
                    "rfid" => "873274789238498748378"
                ],
                [
                    "name" => "Lift #35",
                    "rfid" => "129388380298483747437"
                ]
              ]
          ]
    ]);

});
