<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        \Spatie\Permission\Models\Role::insert([
            ['name' => 'super admin', 'guard_name' => 'web', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'customer admin', 'guard_name' => 'web', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'basic users', 'guard_name' => 'web', 'created_at' => now(), 'updated_at' => now()]
        ]);

        \Spatie\Permission\Models\Permission::insert([
            ['name' => 'edit_users', 'guard_name' => 'web', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'delete_users', 'guard_name' => 'web', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'view_logs', 'guard_name' => 'web', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'add_devices', 'guard_name' => 'web', 'created_at' => now(), 'updated_at' => now()]
        ]);
    }
}
