<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CinemaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cinemas = [
            [
                'nom_cinema' => 'Cinema Rif',
                'localisation' => 'https://maps.app.goo.gl/YmAwn3reKFN8DQCQ8',
            ],
            [
                'nom_cinema' => 'Megarama Goya',
                'localisation' => 'https://maps.app.goo.gl/4t8vhKH4S1Aj5UPW7',
            ],
            [
                'nom_cinema' => 'Megarama City Mall',
                'localisation' => 'https://maps.app.goo.gl/mYZtcDCR34GJS4dH7',
            ],
            [
                'nom_cinema' => 'Roxy',
                'localisation' => 'https://maps.app.goo.gl/g5nXJ3CvqNmhV7oU6',
            ],
            [
                'nom_cinema' => 'Alcazar',
                'localisation' => 'https://maps.app.goo.gl/xAm5Hpp1E4jH1sre9',
            ],
        ];

        DB::table('cinemas')->insert($cinemas);
    }
}

