<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class RemoteDevicePulse
 * @package App\Models
 */
class RemoteDevicePulse extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = ['device_id', 'description'];
}
