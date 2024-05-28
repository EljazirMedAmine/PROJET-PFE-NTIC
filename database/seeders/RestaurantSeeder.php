<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RestaurantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $restaurants = [
            [
                'nom' => 'Mister Noodles',
                'localisation' => 'https://g.co/kgs/KHvd65m',
                'description' => 'add description',
                'photo' => 'https://leguidedesvoyageurs.ma/wp-content/uploads/2023/12/AF1QipMyK0TvK2krEcPVWKyGifzViGx0YEAYfs-bwGiFw1600-h1000-k-no.jpeg'
            ],
            [
                'nom' => 'Parmigiano',
                'localisation' => 'https://g.co/kgs/xmGxfba',
                'description' => 'add description',
                'photo' => 'https://scontent.frba2-1.fna.fbcdn.net/v/t39.30808-6/280199571_4885042558284527_2646082149039741513_n.jpg?nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE83jfTqz8wNhFJzQohpkAGRc7sJ1G8JHxFzuwnUbwkfDkvLGRKEi4j_9IEgz-KPGlnRjzZOJqO_FMoPnCTmpn&_nc_ohc=AAW7YBAt_ZAQ7kNvgHLfg10&_nc_ht=scontent.frba2-1.fna&oh=00_AYClp3RSonS_BTYXLXvdEQcImhjkDNJzwsrTe87lpQLd2g&oe=665AEA07'
            ],
            [
                'nom' => 'papa Johns ',
                'localisation' => 'https://g.co/kgs/TSLiHTH',
                'description' => 'add description',
                'photo' => 'https://brooksregiontourism.com/wp-content/uploads/2017/09/papa-johns.jpg'
            ],
            [
                'nom' => 'Little Mama ',
                'localisation' => 'https://g.co/kgs/Ckow6gc',
                'description' => 'add description',
                'photo' => ' https://scontent.frba2-2.fna.fbcdn.net/v/t39.30808-6/400621157_18217653919301002_4462396384498064245_n.jpg?nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHRgbahaZXMnj7Q_djSs1UXN7PgrO7zZmc3s-Cs7vNmZ332oYmkn9ZqT10fP9KBO7p5J1he5KKJYpRqSHvcc9v&_nc_ohc=cXQvbS7lzhYQ7kNvgGCqC--&_nc_ht=scontent.frba2-2.fna&oh=00_AYA92nDd3o6Hj7pZNj_wBJBu_btLxlrCk6eTC_9ZkVyzpg&oe=665AE02F'
            ],
            [
                'nom' => 'Dakotah ',
                'localisation' => 'https://g.co/kgs/CSyS94p',
                'description' => 'add description',
                'photo' => 'https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-6/349634639_4640310266092742_867273589650456451_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFTB0H3qg2WTkXnZjOIgMt9dknp47NSZ1V2Senjs1JnVcTdfvT8Vu2DcGluayx0XTDXXCFoYUkWqztxs3ZNNMht&_nc_ohc=Okfu4W1Fi40Q7kNvgGB198r&_nc_ht=scontent.frba3-1.fna&oh=00_AYDRiBNVmqI3Jbadv-SImFKH0TSWO7pxBv5mDwpRFEX-AA&oe=665AC399'
            ],
        ];

        DB::table('restaurants')->insert($restaurants);
    }
}
