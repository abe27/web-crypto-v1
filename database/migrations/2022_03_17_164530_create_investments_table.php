<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('investments', function (Blueprint $table) {
            $table->char('id', 21)->primary();
            $table->char('profile_id', 21);
            $table->char('trend_id', 21);
            $table->decimal('last_price', 64, 18);
            $table->decimal('profit_percent', 8, 2);
            $table->string('order_id')->unique();// "id": 2, // order id
            $table->string('order_hash');// "hash": "fwQ6dnQWQPs4cbatFSJpMCcKTFR", // order hash
            $table->string('order_side');// "side": "SELL", // order side
            $table->string('order_type');// "type": "limit", // order type
            $table->decimal('value_rate', 64, 18)->nullable()->default(0);// "value":('rate');// "rate": 15000, // rate
            $table->decimal('fee', 64, 18)->nullable()->default(0);// "fee": 35.01, // fee
            $table->decimal('credit', 62, 18)->nullable()->default(0);// "credit": 35.01, // credit used
            $table->decimal('amount', 62, 18)->nullable()->default(0);// "amount": 0.93333334, // amount
            $table->decimal('receive', 64, 18)->nullable()->default(0);// "receive": 14000, // amount to receive
            $table->bigInteger('parent_id')->nullable()->default(0);// "parent_id": 1, // parent order id
            $table->bigInteger('super_id')->nullable()->default(0);// "super_id": 1, // super parent order id
            $table->integer('ts')->nullable()->default(0);// "ts": 1533834844 // timestamp for server
            $table->enum('is_status', ['-', 'opened', 'closed'])->nullable()->default('-');
            $table->boolean('is_sync')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('profile_id')->references('id')->on('profiles')->cascadeOnDelete();
            $table->foreign('trend_id')->references('id')->on('trends')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('investments');
    }
};
