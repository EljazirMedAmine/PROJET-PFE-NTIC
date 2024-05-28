<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ReservationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $reservations = [
            [
                'date_debut' => Carbon::create(2024, 6, 1),
                'date_fin' => Carbon::create(2024, 6, 5),
                'nbr_personne' => 2,
                'nbr_nuit' => 4,
                'id_chambre' => 1,
                'id_utilisateur' => 1,
                'id_hotel' => 1,
            ],
            [
                'date_debut' => Carbon::create(2024, 6, 10),
                'date_fin' => Carbon::create(2024, 6, 15),
                'nbr_personne' => 3,
                'nbr_nuit' => 5,
                'id_chambre' => 2,
                'id_utilisateur' => 2,
                'id_hotel' => 1,
            ],
            [
                'date_debut' => Carbon::create(2024, 7, 1),
                'date_fin' => Carbon::create(2024, 7, 3),
                'nbr_personne' => 1,
                'nbr_nuit' => 2,
                'id_chambre' => 3,
                'id_utilisateur' => 3,
                'id_hotel' => 2,
            ],
            [
                'date_debut' => Carbon::create(2024, 8, 5),
                'date_fin' => Carbon::create(2024, 8, 10),
                'nbr_personne' => 4,
                'nbr_nuit' => 5,
                'id_chambre' => 4,
                'id_utilisateur' => 4,
                'id_hotel' => 2,
            ],
        ];
        DB::table('reservations')->insert($reservations);

    }
}
