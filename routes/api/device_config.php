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
Route::prefix('config')->group(function() {

    Route::get('device_group/{type}', function (Request $request, $type) {

        // hardcoded reponses and id checks for now. Wil be properly
        // modified once the DB and CRUD is done.

        if ($type != 'rfid_trigger') {
            return response()->json([
                'message' => 'Unknown device_group type ' . $type,
                'status_code' => 404
            ], 404);
        }

        return response()->json([
            "description" => "Configuration data for device groups.",
            "device_groups" => [
                [
                    "id" => 123,
                    "enabled" => 1,
                    "type" => "rfid_trigger",
                    "name" => "Large Forklifts",
                    "trigger_duration_ms" => 5000,
                    "time_between_trigger_seconds" => 86400,
                    "devices" => [[
                        "name" => "Blue forklift #1",
                        "rfid" => "293012938209198321038"
                    ],[
                        "name" => "Blue forklift #2",
                        "rfid" => "102938283850391832938"
                    ]]
                ],
                [
                    "id" => 124,
                    "enabled" => 1,
                    "type" => "rfid_trigger",
                    "name" => "Scissor Lifts",
                    "trigger_duration_ms" => 9000,
                    "time_between_trigger_seconds" => 86400,
                    "devices" => [[
                        "name" => "Lift #1",
                        "rfid" => "873274789238498748378"
                    ],
                        [
                            "name" => "Lift #35",
                            "rfid" => "129388380298483747437"
                        ]]
                ]
            ]
        ]);
    });

});