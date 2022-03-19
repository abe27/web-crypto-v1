<?php

namespace App\Models;

use App\Traits\Nanoids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class RobotSchedule extends Model
{
    use HasFactory, HasApiTokens, Nanoids;

    public $fillable = [
        'profile_id',
        'exchange_id',
        'momentum_id',
        'title',
        'on_hours',
        'on_minutes',
        'is_active',
    ];
}
