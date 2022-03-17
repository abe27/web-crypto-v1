<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Permission extends Model
{
    use HasFactory, HasApiTokens, Uuids;

    public $fillable = [
        'profile_id',
        'permission',
        'is_active'
    ];
}
