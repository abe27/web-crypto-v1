<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Exchange extends Model
{
    use HasFactory, HasApiTokens, Uuids;

    public $fillable = [
        'name',
        'description',
        'is_active',
    ];
}
