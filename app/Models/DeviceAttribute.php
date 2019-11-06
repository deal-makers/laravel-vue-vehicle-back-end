<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeviceGroupOption extends Model
{
    protected $fillable = [
        'name', 'value'
    ];

    public function deviceGroup()
    {
        return $this->belongsTo('App\Models\DeviceGroup');
    }

}
