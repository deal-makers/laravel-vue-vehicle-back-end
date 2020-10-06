<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class DeviceAttribute
 * @package App\Models
 */
class DeviceAttribute extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = ['name', 'value'];

    /**
     * @return BelongsTo
     */
    public function device()
    {
        return $this->belongsTo(Device::class);
    }

    /**
     * @param $api_token
     * @return mixed
     */
    public static function checkApiToken($api_token)
    {
        return self::where('name', 'api_token')->where('value', $api_token)->exists();
    }

    /**
     * @param $token
     * @return mixed
     */
    public static function reportedBy($token)
    {
        return self::where(['name' => 'api_token', 'value' => $token])->pluck('device_id')->first();
    }
}
