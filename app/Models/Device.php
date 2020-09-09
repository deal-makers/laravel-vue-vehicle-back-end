<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Permission\Traits\HasRoles;

/**
 * Class Device
 * @package App\Models
 */
class Device extends Model
{
    use HasRoles, SoftDeletes;

    public function token()
    {
        return $this->hasOne(DeviceToken::class);
    }

    public function logs()
    {
        return $this->hasMany(Log::class);
    }

    public function deviceGroup()
    {
        return $this->belongsTo(DeviceGroup::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function attributes()
    {
        return $this->hasMany(DeviceAttribute::class);
    }

    public function pulses()
    {
        return $this->hasMany(DevicePulse::class);
    }

    public function latestPulse()
    {
        return $this->pulses()->latest();
    }

    public static function generateApiToken()
    {
        //TODO Implement proper api_token generation
        return \Str::random(\Config::get('auth.api_token_length'));
    }
}
