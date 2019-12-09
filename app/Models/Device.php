<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    public function token()
    {
        return $this->hasOne(DeviceToken::class);
    }

    public function logs()
    {
        return $this->hasMany(Log::class);
    }
}
