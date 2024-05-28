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
        Schema::create('payement', function (Blueprint $table) {
            $table->id();
            $table->string('Numero_de_carte',16)->nullable(false);
            $table->string('Numero_de_carte2',16)->nullable(false);
            $table->string('nom')->nullable(false);
            $table->string('Date_expiration')->nullable(false);
            $table->string('Cryptogramme')->nullable(false);
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
        Schema::dropIfExists('payement');
    }
};
