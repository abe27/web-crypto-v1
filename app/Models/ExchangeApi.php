<?php

namespace App\Models;

use App\Traits\Nanoids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class ExchangeApi extends Model
{
    use HasFactory, HasApiTokens, Nanoids;

    public $fillable = [
        'profile_id',
        'exchange_group_id',
        'exchange_id',
        'currency_id',
        'api_expire',
        'api_key',
        'api_secret',
        'is_active',
    ];
}
