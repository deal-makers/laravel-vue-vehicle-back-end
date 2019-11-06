<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeviceRfidTag extends Device
{
    protected $fillable = [
        'name'
    ];

    public const ATTRIBUTES = [
        'rfid'
    ];

    public function devices()
    {
        return $this->hasMany('App\Models\Device');
    }

}
