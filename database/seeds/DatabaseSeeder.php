<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
        	UsersTableSeeder::class,
        	LogsTableSeeder::class,
            DeviceTableSeeder::class,
            DeviceGroupSeeder::class,
            DeviceAttributesTableSeeder::class
        ]);
    }
}
