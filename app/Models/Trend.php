<?php

namespace App\Models;

use App\Traits\Nanoids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Trend extends Model
{
    use HasFactory, HasApiTokens, Nanoids;

    public $fillable = [
        'exchange_id',
        'trend_id',
        'symbol_id',
        'recomm_id',
        'price',
        'percent',
        'is_open',
        'is_active',
    ];
}
