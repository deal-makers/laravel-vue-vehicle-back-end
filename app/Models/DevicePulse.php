<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class RemoteDevicePulse
 * @package App\Models
 */
class DevicePulse extends Model
{
    /** @var string[] */
    protected $fillable = ['device_id'];

    /** @var bool */
    public $timestamps = true;
}
