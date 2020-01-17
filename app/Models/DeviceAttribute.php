<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeviceAttribute extends Model
{
    public function device()
    {
        return $this->belongsTo(Device::class);
    }

    public static function checkApiToken($api_token)
    {
        $token = self::where('name', 'api_token')->where('value', $api_token)->first();

        if(!is_null($token)) {
            return $token;
        } else {
            return false;
        }
    }
}
