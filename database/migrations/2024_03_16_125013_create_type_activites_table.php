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
        Schema::create('type_activites', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_activite')->constrained('activites')->onDelete('cascade');
            $table->string('photo', 5000)->nullable();
            $table->integer('rating');
            $table->string('location')->nullable();
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
        Schema::dropIfExists('type_activites');
    }
};
