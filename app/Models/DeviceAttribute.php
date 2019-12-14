<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeviceAttribute extends Model
{
    public function device()
    {
        return $this->belongsTo(Device::class);
    }
}
