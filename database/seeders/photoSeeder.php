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
                'photo_4' => 'https://media.istockphoto.com/id/1408512831/photo/woman-riding-horse-at-country-farm.webp?b=1&s=170667a&w=0&k=20&c=YUHLZKuT2TPp2IwEWo1sTjIplUV2wV0SWQUz2MlB6wU=',

            ],
            [
                'id_typeactivite' => 3,
                'photo_1' => 'https://images.pexels.com/photos/1559388/pexels-photo-1559388.jpeg',
                'photo_2' => '',
                'photo_3' => '',
                'photo_4' => '',
            ],
            [
                'id_typeactivite' => 4,
                'photo_1' => 'https://images.pexels.com/photos/1559388/pexels-photo-1559388.jpeg',
                'photo_2' => '',
                'photo_3' => '',
                'photo_4' => '',
            ],
            [
                'id_typeactivite' => 5,
                'photo_1' => 'https://images.pexels.com/photos/1559388/pexels-photo-1559388.jpeg',
                'photo_2' => '',
                'photo_3' => '',
                'photo_4' => '',
            ],
            [
                'id_typeactivite' => 6,
                'photo_1' => 'https://images.pexels.com/photos/1559388/pexels-photo-1559388.jpeg',
                'photo_2' => '',
                'photo_3' => '',
                'photo_4' => '',
            ],
            [
                'id_typeactivite' => 7,
                'photo_1' => 'https://images.pexels.com/photos/1559388/pexels-photo-1559388.jpeg',
                'photo_2' => '',
                'photo_3' => '',
                'photo_4' => '',
            ],
            [
                'id_typeactivite' => 8,
                'photo_1' => 'https://images.pexels.com/photos/1559388/pexels-photo-1559388.jpeg',
                'photo_2' => '',
                'photo_3' => '',
                'photo_4' => '',
            ],
        ]);
    }
}
