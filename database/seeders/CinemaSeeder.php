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
                'photo' => 'https://lh5.googleusercontent.com/p/AF1QipOpiP3drjA8FfZE1x355Ba5Dln9XDncxiKEsbE=w408-h304-k-no',
            ],
            [
                'nom_cinema' => 'Megarama Goya',
                'localisation' => 'https://maps.app.goo.gl/4t8vhKH4S1Aj5UPW7',
                'photo' => 'https://lh5.googleusercontent.com/p/AF1QipMySVlqSbr6PtuxmtFDOSJl00m0CThdnyTye1dH=w408-h268-k-no',
            ],
            [
                'nom_cinema' => 'Megarama City Mall',
                'localisation' => 'https://maps.app.goo.gl/mYZtcDCR34GJS4dH7',
                'photo' => 'https://tanger.megarama.ma/public/contenus/69e8c98eb12348bc9d3b9e1132b98705/images/megarama-citymall769a8--w512.jpg',
            ],
            [
                'nom_cinema' => 'Roxy',
                'localisation' => 'https://maps.app.goo.gl/g5nXJ3CvqNmhV7oU6',
                'photo' => 'https://docs.imperium.plus/files/media-GRGQG-GFRFXRXG-PQQLL-GSMFFW-GFRFGQQPLL-LLPXR-GFRFGQSMRQFW-X-QQXGQFFWQG',
            ],
            [
                'nom_cinema' => 'Alcazar',
                'localisation' => 'https://maps.app.goo.gl/xAm5Hpp1E4jH1sre9',
                'photo' => 'https://i0.wp.com/newstourisme.com/wp-content/uploads/2022/03/IMG_4850.jpg?fit=800%2C533&ssl=1',
            ],
        ];

        DB::table('cinemas')->insert($cinemas);
    }
}

