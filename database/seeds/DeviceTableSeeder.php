<?php

use Illuminate\Database\Seeder;

class DeviceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('devices')->insert([
            'name' => 'Test12',
            'device_group_id' => 1,
            'device_rfid' => 312312,
            'description' => Str::random('20'),
            'api_token' => Str::random(15),
        ]);
    }
}
