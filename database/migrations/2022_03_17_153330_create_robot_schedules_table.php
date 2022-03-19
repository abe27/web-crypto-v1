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
        Schema::create('robot_schedules', function (Blueprint $table) {
            $table->char('id', 21)->primary();
            $table->char('profile_id', 21);
            $table->char('exchange_id', 21);
            $table->char('momemtum_id', 21);
            $table->enum('title', ['-', 'New', 'Subscribe'])->nullable()->default('-');
            $table->char('on_hours', 21);
            $table->char('on_minute', 21);
            $table->boolean('is_active')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('profile_id')->references('id')->on('profiles')->cascadeOnDelete();
            $table->foreign('exchange_id')->references('id')->on('exchange_apis')->cascadeOnDelete();
            $table->foreign('momemtum_id')->references('id')->on('momemtums')->cascadeOnDelete();
            $table->foreign('on_hours')->references('id')->on('period_hours')->cascadeOnDelete();
            $table->foreign('on_minute')->references('id')->on('period_minutes')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('robot_schedules');
    }
};
