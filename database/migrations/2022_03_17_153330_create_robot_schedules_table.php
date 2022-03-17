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
            $table->char('momentum_id', 21);
            $table->enum('title', ['-', 'New', 'Subscribe'])->nullable()->default('-');
            $table->enum('on_hours', ['*', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'])->nullable()->default('1');
            $table->enum('on_minutes', ['*', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'])->nullable()->default('15');
            $table->boolean('is_active')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('profile_id')->references('id')->on('profiles')->cascadeOnDelete();
            $table->foreign('exchange_id')->references('id')->on('exchange_apis')->cascadeOnDelete();
            $table->foreign('momentum_id')->references('id')->on('momentums')->cascadeOnDelete();
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
