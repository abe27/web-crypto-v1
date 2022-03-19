<?php

namespace App\Models;

use App\Traits\Nanoids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Profile extends Model
{
    use HasFactory, HasApiTokens, Nanoids;

    public $fillable = [
        'user_id',
        'avatar_url',
        'is_active',
    ];
}
