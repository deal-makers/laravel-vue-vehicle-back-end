<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class DeviceGroupSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        DB::table('device_groups')->insert([
            'name' => 'group1',
            'enabled' => 1,
            // 'type' => 'rfid_trigger',
            'device_type_id' => 1,
            'trigger_duration_seconds' => '5',
            'time_between_trigger' => '120'
        ]);
        DB::table('device_groups')->insert([
            'name' => 'test',
            'enabled' => 1,
            // 'type' => 'rfid_trigger',
            'device_type_id' => 1,
            'trigger_duration_seconds' => '5',
            'time_between_trigger' => '120'
        ]);
    }
}
