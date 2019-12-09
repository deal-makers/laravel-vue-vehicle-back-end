<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeviceGroup extends Model
{
    public function logs()
    {
        return $this->hasMany(Log::class);
    }
}
