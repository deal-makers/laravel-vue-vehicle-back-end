<?php

use Illuminate\Database\Seeder;

class DeviceTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        DB::table('devices')->insert([
            'name' => 'RPi',
            'device_group_id' => null,
            'device_rfid' => null,
            'device_id' => 111,
            'description' => null,
        ]);

        DB::table('devices')->insert([
            'name' => 'random1',
            'device_group_id' => 1,
            'device_rfid' => '0007935148',
            'device_id' => 22,
            'description' => Str::random(\Config::get('auth.api_token_length')),
        ]);
        DB::table('devices')->insert([
            'name' => 'random2',
            'device_group_id' => 1,
            'device_rfid' => '0007939547',
            'device_id' => 123,
            'description' => Str::random(\Config::get('auth.api_token_length')),
        ]);
    }
}
