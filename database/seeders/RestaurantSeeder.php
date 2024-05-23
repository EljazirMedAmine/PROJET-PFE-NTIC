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
                'description' => 'add description'
            ],
            [
                'nom' => 'Parmigiano',
                'localisation' => 'https://g.co/kgs/xmGxfba',
                'description' => 'add description'
            ],
            [
                'nom' => 'papa Johns ',
                'localisation' => 'https://g.co/kgs/TSLiHTH',
                'description' => 'add description'
            ],
            [
                'nom' => 'Little Mama ',
                'localisation' => 'https://g.co/kgs/Ckow6gc',
                'description' => 'add description'
            ],
            [
                'nom' => 'Dakotah ',
                'localisation' => 'https://g.co/kgs/CSyS94p',
                'description' => 'add description'
            ],
        ];

        DB::table('restaurants')->insert($restaurants);
    }
}
?>
