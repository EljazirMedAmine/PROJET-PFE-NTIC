<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class photoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('photos')->insert([
            [
                'id_typeactivite' => 2,
                'photo_1' => 'https://images.pexels.com/photos/1559388/pexels-photo-1559388.jpeg',
                'photo_2' => 'https://images.unsplash.com/photo-1546700990-7b6416f2d90c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yc2UlMjByaWRpbmd8ZW58MHx8MHx8fDA%3D',
                'photo_3' => 'https://media.istockphoto.com/id/1408512831/photo/woman-riding-horse-at-country-farm.webp?b=1&s=170667a&w=0&k=20&c=YUHLZKuT2TPp2IwEWo1sTjIplUV2wV0SWQUz2MlB6wU=',
                'photo_4' => 'https://watermark.lovepik.com/photo/20211203/large/lovepik-woman-riding-a-horse-on-the-beach-picture_501459180.jpg',

            ],
            [
                'id_typeactivite' => 3,
                'photo_1' => 'https://images5.alphacoders.com/380/380057.jpg',
                'photo_2' => 'https://w0.peakpx.com/wallpaper/553/786/HD-wallpaper-bowling-skittles-bowling-ball.jpg',
                'photo_3' => 'https://media.istockphoto.com/id/469948873/photo/bowling.jpg?s=612x612&w=0&k=20&c=9inSut2G7ixeEw0Hr-mXnzrzvVcFrnEdmVkA_08q5Pw=',
                'photo_4' => 'https://www.wallpaperflare.com/static/429/25/288/hawk-nelson-bowling-game-scream-wallpaper.jpg',
            ],
            [
                'id_typeactivite' => 4,
                'photo_1' => 'hhttps://images6.alphacoders.com/688/688888.jpg',
                'photo_2' => 'https://images.unsplash.com/photo-1588432815128-363254491e4e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFpbnRiYWxsfGVufDB8fDB8fHww',
                'photo_3' => 'https://images.unsplash.com/photo-1522499820455-9c821da82b9e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhaW50YmFsbHxlbnwwfHwwfHx8MA%3D%3D',
                'photo_4' => 'https://img.freepik.com/premium-photo/paintball-competitive-play-action-shots_933496-5118.jpg',
            ],
            [
                'id_typeactivite' => 5,
                'photo_1' => 'https://plus.unsplash.com/premium_photo-1661380954234-13d98a83577c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90dGVyeXxlbnwwfHwwfHx8MA%3D%3D',
                'photo_2' => 'https://c4.wallpaperflare.com/wallpaper/868/257/318/clay-depth-of-field-india-macro-wallpaper-preview.jpg',
                'photo_3' => 'https://www.shutterstock.com/shutterstock/videos/1107385373/thumb/1.jpg?ip=x480',
                'photo_4' => 'https://t3.ftcdn.net/jpg/06/21/10/00/360_F_621100063_gfYr0TNN8RVCZT4hDpEYcIMOKVzOAMyw.jpg',
            ],
            [
                'id_typeactivite' => 6,
                'photo_1' => 'https://bybike.ma/wp-content/uploads/2022/08/IMG_4999.jpg',
                'photo_2' => 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0b/3c/0e/by-bike-le-plaisir-de.jpg?w=500&h=500&s=1',
                'photo_3' => 'https://webbox.imgix.net/images/rejrkauybxzoplhh/2bdc32eb-b999-40f0-9ec1-4a57c87e187a.jpg?auto=format,compress&fit=crop&crop=entropy',
                'photo_4' => 'https://cdn.getyourguide.com/img/tour/78e30c9a67e878eb.jpeg/145.jpg',
            ],
            [
                'id_typeactivite' => 7,
                'photo_1' => 'https://cdn.getyourguide.com/img/tour/5bf427c3a1dc3.jpeg/98.jpg',
                'photo_2' => 'https://www.civitatis.com/f/marruecos/tanger/autobus-turistico-tanger-589x392.jpg',
                'photo_3' => 'https://tanger.city-tour.com/wp-content/uploads/sites/16/2023/07/TANGER-CITY-TOU-1.jpg',
                'photo_4' => 'https://res.cloudinary.com/https-www-isango-com/image/upload/f_auto/t_m_Prod/v1678880176/africa/morocco/tangier/dsc00819.jpg',
            ],
            [
                'id_typeactivite' => 8,
                'photo_1' => 'https://www.clubs.ma/assets/originals/1407/marrakech-kart-racing-centre-de-loisirs-sportifs-marrakech-1407.jpg',
                'photo_2' => 'https://store.clubs.ma/api/passes/media/3acf4824-5d96-4ad7-b4cc-6496509df381/large.webp',
                'photo_3' => 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/d2/8e.jpg',
                'photo_4' => 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/a5/23/1b.jpg',
            ],
        ]);
    }
}
