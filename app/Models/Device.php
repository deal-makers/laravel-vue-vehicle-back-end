<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    protected $fillable = [
        'name'
    ];

    public function deviceGroup()
    {
        return $this->belongsTo('App\Models\DeviceGroup');
    }


    public function attributes()
    {
        return $this->hasMany('App\Models\DeviceAttribute');
    }
}
