<?php

use Illuminate\Database\Seeder;

class DeviceGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('device_groups')->insert([
            'name' => 'group1',
            'enabled' => 1,
            'type' => 'rfid_trigger',
            'trigger_duration_ms' => '5000',
            'time_between_trigger' => '120'
        ]);
        DB::table('device_groups')->insert([
            'name' => 'test',
            'enabled' => 1,
            'type' => 'rfid_trigger',
            'trigger_duration_ms' => '85000',
            'time_between_trigger' => '21120'
        ]);
    }
}
