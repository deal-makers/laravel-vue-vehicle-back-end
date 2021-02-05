<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use Illuminate\Support\Str;

class LogsTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
    	for($i=0;$i<=10;$i++) {
    		DB::table('logs')->insert([
	            'device_id' => mt_rand(2,3),
	            'reported_by' => mt_rand(1,2),
	            'event_desc' => Str::random(20),
	            'reported_at' => \Carbon\Carbon::now()->subDays($i),
	            'created_at' => \Carbon\Carbon::now(),
	            'updated_at' => \Carbon\Carbon::now()
        	]);
    	}
    }
}
