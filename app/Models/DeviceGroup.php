<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeviceGroup extends Model
{
    protected $fillable = [
        'enabled', 'type', 'name'
    ];

    public function options()
    {
        return $this->hasMany('App\Models\DeviceGroupOption');
    }

    public function devices()
    {
        return $this->hasMany('App\Models\Device');
    }
}
