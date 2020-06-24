<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;

/**
 * Class RemoteIOTDevice
 * @package App\Models
 */
class RemoteIOTDevice extends Model
{
    use HasRoles;

    /**
     * @var string[]
     */
    protected $fillable = [
        'id', 'device_id', 'name', 'description', 'auth_code', 'active', 'device_group_id'
    ];
}
