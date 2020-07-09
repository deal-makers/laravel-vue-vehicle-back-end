<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PulseControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->postJson('api/v1/pulse?api_token=njth9bXcf7gLAsv', [
            'description' => $this->faker->paragraph
        ]);

        dump($response->original);
        $response->assertStatus(200);
    }
}
