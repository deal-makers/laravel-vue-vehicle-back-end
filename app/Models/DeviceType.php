<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class RemoteIOTDevice
 * @package App\Models
 */
class DeviceType extends Model
{
    use SoftDeletes;

    /**
     * @var string
     */
    protected $table = 'device_type';

    /**
     * @var string[]
     */
    protected $fillable = [
        'id', 'name', 'attributes', 'device_id'
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'attributes' => 'json'
    ];

    /**
     * Get actual device of this type
     */
    public function device()
    {
        return $this->belongsTo(Device::class, 'device_id');
    }
}
