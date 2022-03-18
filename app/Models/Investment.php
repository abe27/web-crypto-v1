<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Investment extends Model
{
    use HasFactory, HasApiTokens, Uuids;

    public $fillable = [
        'profile_id',
        'trend_id',
        'last_price',
        'profit_percent',
        'order_id',
        'order_hash',
        'order_side',
        'order_type',
        'value_rate',
        'fee',
        'credit',
        'amount',
        'receive',
        'parent_id',
        'super_id',
        'ts',
        'is_status',
        'is_sync',
    ];
}
