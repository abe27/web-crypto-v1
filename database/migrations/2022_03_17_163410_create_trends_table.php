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
        Schema::create('trends', function (Blueprint $table) {
            $table->char('id', 21)->primary();
            $table->char('exchange_id', 21);
            $table->char('trend_id', 21);
            $table->char('symbol_id', 21);
            $table->char('recomm_id', 21);
            $table->decimal('price', 8, 21);
            $table->decimal('percent', 8, 2);
            $table->boolean('is_open')->nullable()->default(false);
            $table->boolean('is_active')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('exchange_id')->references('id')->on('exchange_apis')->cascadeOnDelete();
            $table->foreign('momemtum_id')->references('id')->on('momemtums')->cascadeOnDelete();
            $table->foreign('symbol_id')->references('id')->on('symbols')->cascadeOnDelete();
            $table->foreign('recomm_id')->references('id')->on('recomments')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trends');
    }
};
