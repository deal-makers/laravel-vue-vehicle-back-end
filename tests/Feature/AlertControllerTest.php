<?php

namespace Tests\Feature;

use Tests\TestCase;

class AlertControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testAlertSave()
    {
        $response = $this->postJson('api/v1/alerts/create', [
            'status' => 'Ok',
            'detail' => 'Communication Cable Present'
        ]);

        $response->assertStatus(200);
    }
}
