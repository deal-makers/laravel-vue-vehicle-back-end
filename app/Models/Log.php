<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    public function device()
    {
        return $this->belongsTo(Device::class);
    }

    public function reportedBy()
    {
        return $this->belongsTo(Device::class, 'reported_by');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
