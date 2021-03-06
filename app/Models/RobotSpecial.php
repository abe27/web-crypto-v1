<?php

namespace App\Models;

use App\Traits\Nanoids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class RobotSpecial extends Model
{
    use HasFactory, HasApiTokens, Nanoids;

    public $fillable = [
        'profile_id',
        'exchange_id',
        'trend_type_id',
        'gte_percent',
        'reactive',
        'is_active',
    ];
}
