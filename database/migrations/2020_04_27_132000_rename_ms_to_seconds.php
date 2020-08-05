<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameMsToSeconds extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('device_groups', function (Blueprint $table) {
            $table->renameColumn('trigger_duration_ms', 'trigger_duration_seconds');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('device_groups', function (Blueprint $table) {
            $table->renameColumn('trigger_duration_seconds', 'trigger_duration_ms');
        });
    }
}
