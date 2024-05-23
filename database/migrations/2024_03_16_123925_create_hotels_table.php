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
     Schema::create('hotels', function (Blueprint $table) {
    $table->id();
    $table->string('nom');
    $table->string('photo')->nullable(false);
    $table->string('description',2000)->nullable();
    $table->integer('rate')->nullable(false);
    $table->string('prix')->nullable(false);
    $table->string('localisation')->nullable(false);
    $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hotels');
    }
};
