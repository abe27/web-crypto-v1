<?php

namespace App\Models;

use App\Traits\Nanoids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Symbols extends Model
{
    use HasFactory, HasApiTokens, Nanoids;

    public $fillable = [
        'group_id',
        'name',
        'description',
        'flag_url',
        'is_active',
    ];
}
