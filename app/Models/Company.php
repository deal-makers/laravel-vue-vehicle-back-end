<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Company
 * @package App\Models
 */
class Company extends Model
{
    use SoftDeletes;

    /**
     * @var string[]
     */
    protected $fillable = ['name', 'active'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function settings()
    {
        return $this->hasOne(CompanySettings::class);
    }
}
