<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class ProfitLimit extends Model
{
    use HasFactory, HasApiTokens, Uuids;

    public $fillable = [
        'profile_id',
        'exchange_id',
        'take_profit',
        'stop_loss',
        'description',
        'is_active',
    ];
}
