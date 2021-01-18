<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class RemoteIOTDevice
 *
 * @package App\Models
 *
 * Attributes are defined in a way that is similar to No SQL.
 * They are defined as
 */
class DeviceType extends Model
{
    /**
     * @var string
     */
    protected $table = 'device_types';

    /**
     * @var string[]
     */
    protected $fillable = [
        'id', 'name', 'attributes'
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'attributes' => 'json'
    ];

    //private $attribute_array = stdClass;

    const ATTRIBUTE_TYPES = [
        'string',
        'int',
        'array'
    ];

    /**
     * Get actual device of this type
     */
    public function device()
    {
        return $this->belongsTo(Device::class, 'device_id');
    }

    public function deviceGroups()
    {
        return $this->hasMany(DeviceGroup::class, 'device_type_id');
    }

    static function doesTypeExist($type = '')
    {
        if (empty($type)) {
            return false;
        }
        $types = self::where('name', '=', $type)->get();
        return $types->count() > 0;
    }

    public function addAttribute($name, $type)
    {

    }
}
