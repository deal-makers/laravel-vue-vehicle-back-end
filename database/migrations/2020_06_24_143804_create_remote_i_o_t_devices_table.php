<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRemoteIOTDevicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('remote_i_o_t_devices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('device_id')->unique();
            $table->string('name')->nullable()->default(null);
            $table->string('description')->nullable()->default(null);
            $table->string('auth_code')->unique();
            $table->boolean('active')->default(false);
            $table->unsignedBigInteger('device_group_id');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('device_group_id')
                ->references('id')->on('device_groups')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('remote_i_o_t_devices');
    }
}
