<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class CompanySettings
 * @package App\Models
 */
class CompanySettings extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = ['company_id', 'alerts_emails', 'logo_filename'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
