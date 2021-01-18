<?php

use Illuminate\Database\Seeder;

class DeviceAttributesTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        DB::table('device_attributes')->insert([
            [
                'device_id' => 1,
                'name' => 'compute_module',
                'value' => 1,
            ],[
                'device_id' => 1,
                'name' => 'api_token',
                'value' => Str::random(\Config::get('auth.api_token_length'))
            ],[
                'device_id' => 2,
                'name' => 'rfid_tag',
                'value' => 1
            ], [
                'device_id' => 3,
                'name' => 'rfid_tag',
                'value' => 1
            ]
        ]);
    }
}
