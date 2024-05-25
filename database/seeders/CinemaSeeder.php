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
                'description' => 'Cinema Rif in Tangier, located in Grand Socco, is a historic theater known for its Art Deco design and cultural significance.',
                'localisation' => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.654448452593!2d-5.8130882!3d35.7838637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7f52c34bd6eb%3A0xa1f5bf6e66c997d4!2sCin%C3%A9ma%20Rif!5e0!3m2!1sen!2sma!4v1716644100006!5m2!1sen!2sma",
                'photo' => 'https://lh5.googleusercontent.com/p/AF1QipOpiP3drjA8FfZE1x355Ba5Dln9XDncxiKEsbE=w408-h304-k-no',
            ],
            [
                'nom_cinema' => 'Megarama Goya',
                'description' => 'Megarama Goya in Tangier is a modern cinema complex with multiple screens, showing international and local films.',
                'localisation' => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.8708297690973!2d-5.8098168999999995!3d35.77854920000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7fd1b6e291b7%3A0xf8cc4a0807e6999e!2sCin%C3%A9ma%20M%C3%A9garama%20Goya!5e0!3m2!1sen!2sma!4v1716644158636!5m2!1sen!2sma",
                'photo' => 'https://lh5.googleusercontent.com/p/AF1QipMySVlqSbr6PtuxmtFDOSJl00m0CThdnyTye1dH=w408-h268-k-no',
            ],
            [
                'nom_cinema' => 'Megarama City Mall',
                'description' => 'Megarama City Mall in Tangier is a modern cinema with multiple screens, located in City Mall.',
                'localisation' => "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6474.19039701455!2d-5.7875514!3d35.7730378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b809c5849a325%3A0x2aa8818fd122a17a!2sMegarama!5e0!3m2!1sen!2sma!4v1716644201645!5m2!1sen!2sma",
                'photo' => 'https://tanger.megarama.ma/public/contenus/69e8c98eb12348bc9d3b9e1132b98705/images/megarama-citymall769a8--w512.jpg',
            ],
            [
                'nom_cinema' => 'Roxy',
                'description' => '
                Roxy in Tangier is a historic cinema celebrated for its classic charm and cultural importance.',
                'localisation' => "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25895.17593212885!2d-5.8456087!3d35.7779066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7f542cdcfcdd%3A0xd9a9f9e8b9b62bfa!2sCin%C3%A9ma%20Roxy!5e0!3m2!1sen!2sma!4v1716644241526!5m2!1sen!2sma",
                'photo' => 'https://docs.imperium.plus/files/media-GRGQG-GFRFXRXG-PQQLL-GSMFFW-GFRFGQQPLL-LLPXR-GFRFGQSMRQFW-X-QQXGQFFWQG',
            ],
            [
                'nom_cinema' => 'Alcazar',
                'description' => 'Alcazar in Tangier is a historic cinema known for its classic architecture and cultural significance.',
                'localisation' => "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d103569.71974224875!2d-5.8134603!3d35.7863369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7f4d53b1dea3%3A0x9ff624210a70d56!2sCinema%20Alcazar!5e0!3m2!1sen!2sma!4v1716644278596!5m2!1sen!2sma",
                'photo' => 'https://i0.wp.com/newstourisme.com/wp-content/uploads/2022/03/IMG_4850.jpg?fit=800%2C533&ssl=1',
            ],
        ];

        DB::table('cinemas')->insert($cinemas);
    }
}
