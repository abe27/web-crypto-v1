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
        Schema::create('robot_specials', function (Blueprint $table) {
            $table->char('id', 21)->primary();
            $table->char('profile_id', 21);
            $table->char('exchange_id', 21);
            $table->char('recomm_id', 21);
            $table->decimal('gte_percent', 8, 2)->nullable()->default(4);
            $table->enum('reactive', ['-', 'Open', 'Close', 'Hold'])->nullable()->default('-');
            $table->boolean('is_active')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('profile_id')->references('id')->on('profiles')->cascadeOnDelete();
            $table->foreign('recomm_id')->references('id')->on('recommendations')->cascadeOnDelete();
            $table->foreign('exchange_id')->references('id')->on('exchange_apis')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('robot_specials');
    }
};
