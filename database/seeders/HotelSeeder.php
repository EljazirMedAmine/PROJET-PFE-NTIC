<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HotelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $hotels = [
            [
                'nom' => 'Hilton',
                'photo'=>'https://www.hilton.com/im/en/TNGCCHI/5215622/tngcc-hotel-exterior.jpg?impolicy=crop&cw=6720&ch=3762&gravity=NorthWest&xposition=0&yposition=358&rw=768&rh=430',
                'description' => '
                Hilton Tanger Playa: A chic beachfront hotel in Tangier, Morocco, offering modern accommodations and stunning sea views, perfect for a relaxing coastal getaway.',
                'rate'=> 4,
                'prix' => '100',
                'localisation' => 'https://maps.app.goo.gl/EkQGNEzTCRf41Ahh9',
            ],
            [
                'nom' => 'Ibis',
                'photo'=>'https://cf.bstatic.com/xdata/images/hotel/max1024x768/163481538.jpg?k=37275e18d7d2b7bd0fa2f18dcbd7d4f498efda6ca6f0a7edab7214ea850fe5b8&o=&hp=1',
                'description' => '
                Ibis Tanger Playa: A modern beachfront hotel in Tangier, Morocco, offering comfortable rooms and convenient amenities for a pleasant stay near the sea. Ideal for travelers seeking affordability without sacrificing comfort.',
                'rate'=> 3,
                'prix' => '60',
                'localisation' => 'https://maps.app.goo.gl/8KoPxb59MJMevnW78',
            ],
            [
                'nom' => 'Movenpick',
                'photo'=>'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/9b/0b/80/interior-view.jpg?w=1200&h=-1&s=1',
                'description' => '
                Movenpick Tanger City Center: A luxurious hotel in the heart of Tangier, Morocco, featuring elegant rooms, upscale amenities, and stunning views of the city and Mediterranean Sea. Ideal for both business and leisure travelers seeking a sophisticated stay in Tangier.',
                'rate'=> 5,
                'prix' => '140',
                'localisation' => 'https://maps.app.goo.gl/YnYbRi11wG9BkNbm7',
            ],
            [
                'nom' => 'Farah',
                'photo'=>'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/e4/f7/1b/outside.jpg?w=700&h=-1&s=1',
                'description' => '
                Farah Tanger: A stylish hotel in Tangier, Morocco, blending modern comfort with Moroccan hospitality. Conveniently located near the city center, it offers comfortable rooms, dining options, and leisure facilities for a memorable stay.',
                'rate'=> 4,
                'prix' => '80',
                'localisation' => 'https://maps.app.goo.gl/QuMLzkAKUen8B88T6',
            ],
        ];

        DB::table('hotels')->insert($hotels);
    }
}
