<?php

namespace Tests\Feature;

use App\Http\Controllers\API\RPI\LogController;
use Tests\TestCase;

class LogControllerTest extends TestCase
{

    public function testStoreLogData()
    {
        $data = [
            [
                "device_group_id" => 2,
                "device_id" => "16", #<<<< This should be the id that matches Olympus db
                "event_time" => now()->toDateTimeString(),
                "event_description" => "Trigger fired 5000ms."
            ],
            [
                "device_group_id" => 2,
                "device_id" => "16",
                "event_time" => now()->toDateTimeString(),
                "event_description" => "Trigger skipped. time_between_trigger_seconds=86400. seconds elapsed=830."
            ],
            [
                "device_group_id" => 3,
                "device_id" => "17",
                "event_time" => now()->toDateTimeString(),
                "event_description" => "Trigger skipped. time_between_trigger_seconds=86400. seconds elapsed=1730."
            ]
        ];

        $response = $this->postJson('api/v1/logs/create?api_token=njth9bXcf7gLAsv', compact('data'));

        $response->assertStatus(201);
    }
}
