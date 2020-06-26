<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
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
}
