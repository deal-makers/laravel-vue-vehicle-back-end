<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeviceGroupOption extends Model
{
    public function deviceGroup()
    {
        return $this->belongsTo(DeviceGroup::class);
    }
}
