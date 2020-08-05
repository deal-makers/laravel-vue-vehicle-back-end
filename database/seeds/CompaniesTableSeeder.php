<?php

use Illuminate\Database\Seeder;

class CompaniesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Company::create([
            'name' => 'One Blink',
            'active' => true
        ])->settings()->create([
            'alerts_emails' => 'jaysyzdek@gmail.com'
        ]);
    }
}
