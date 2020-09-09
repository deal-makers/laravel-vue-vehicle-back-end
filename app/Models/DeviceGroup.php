<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeviceGroup extends Model
{
    protected $fillable = [
        'enabled', 'device_type_id', 'name', 'trigger_duration_seconds', 'time_between_trigger'
    ];

    public $timestamps = true;

    public function logs()
    {
        return $this->hasMany(Log::class);
    }

    public function devices()
    {
        return $this->hasMany(Device::class);
    }

    public function options()
    {
        return $this->hasMany(DeviceGroupOption::class);
    }

    public function device_type()
    {
        return $this->belongsTo(DeviceType::class);
    }

}
