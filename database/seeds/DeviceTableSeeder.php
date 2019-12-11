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
            'device_group_id' => 2,
            'device_rfid' => 312312,
            'description' => Str::random('20'),
            'api_token' => Str::random(15),
        ]);

        DB::table('devices')->insert([
            'name' => 'random1',
            'device_group_id' => 1,
            'device_rfid' => '0007935148',
            'description' => Str::random('20'),
            'api_token' => Str::random(15),
        ]);
        DB::table('devices')->insert([
            'name' => 'random2',
            'device_group_id' => 1,
            'device_rfid' => '0007939547',
            'description' => Str::random('20'),
            'api_token' => Str::random(15),
        ]);
    }
}
