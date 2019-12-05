<?php

use Illuminate\Database\Seeder;

class LogsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	for($i=0;$i<=10;$i++) {
    		DB::table('logs')->insert([
	            'group_id' => mt_rand(1,10),
	            'device_id' => mt_rand(1,10),
	            'reported_by' => mt_rand(1,3),
	            'event_desc' => Str::random(20),
	            'reported_at' => \Carbon\Carbon::now()->subDays($i),
	            'created_at' => \Carbon\Carbon::now(),
	            'updated_at' => \Carbon\Carbon::now()
        	]);
    	}
    }
}
