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
        Schema::create('exchange_apis', function (Blueprint $table) {
            $table->char('id', 21)->primary();
            $table->char('profile_id', 21);
            $table->char('exchange_group_id', 21);
            $table->char('exchange_id', 21);
            $table->char('currency_id', 21);
            $table->char('time_frame_id', 21);
            $table->date('api_expire');
            $table->string('api_key');
            $table->string('api_secret');
            $table->boolean('is_active')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('profile_id')->references('id')->on('profiles')->cascadeOnDelete();
            $table->foreign('exchange_group_id')->references('id')->on('exchange_groups')->cascadeOnDelete();
            $table->foreign('exchange_id')->references('id')->on('exchanges')->cascadeOnDelete();
            $table->foreign('currency_id')->references('id')->on('currencies')->cascadeOnDelete();
            $table->foreign('time_frame_id')->references('id')->on('time_frames')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('exchange_apis');
    }
};
