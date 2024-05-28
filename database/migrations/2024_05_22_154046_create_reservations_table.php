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
        Schema::create('reservations', function (Blueprint $table) {
        $table->id();
        $table->date('date_debut');
        $table->date('date_fin');
        $table->unsignedBigInteger('id_chambre');
        $table->unsignedBigInteger('id_hotel');
        $table->unsignedBigInteger('id_utilisateur');
        $table->integer('nbr_nuit');
        $table->integer('nbr_personne');
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
        Schema::dropIfExists('reservations');
    }
};
