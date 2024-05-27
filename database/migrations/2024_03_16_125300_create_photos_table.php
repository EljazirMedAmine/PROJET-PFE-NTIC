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
        Schema::create('photos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_typeactivite')->constrained('type_activites')->onDelete('cascade');
            $table->string('photo_1',3000)->nullable(false);
            $table->string('photo_2',3000)->nullable();
            $table->string('photo_3',3000)->nullable();
            $table->string('photo_4',3000)->nullable();
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
        Schema::dropIfExists('photos');
    }
};
