<?php

namespace App\Models;

use App\Traits\Nanoids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class PeriodMinute extends Model
{
    use HasFactory, HasApiTokens, Nanoids;

    public $fillable = [
        'name',
        'description',
        'is_active',
    ];
}
