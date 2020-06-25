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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function device_group()
    {
        return $this->belongsTo(DeviceGroup::class, 'device_group_id');
    }
}
