<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActiviteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $activites = [
            [
                'nom' => 'Movies',
                'description' => 'Movies, a captivating art form, weave stories that elicit emotions and spark imagination.
                 From thrilling adventures to heartwarming dramas, the cinema is a portal
                 to diverse worlds of entertainment, providing moments of joy, excitement, and reflection for all. ',
                'tel' => 'Add phone number ',
                'prix' => 15.99,
            ],
            [
                'nom' => 'Horse Riding',
                'description' => 'Horse riding: a blend of freedom, grace, and connection between rider and steed,
                 creating a uniquely exhilarating experience. ',
                'tel' => 'Add phone number ',
                'prix' => 25.50,
            ],
            [
                'nom' => 'Bowling',
                'description' => 'Bowling, a classic leisure activity, invites friendly
                competition as you aim for strikes and spares on the polished lanes. ',
                'tel' => 'Add phone number ',
                'prix' => 12.75,
            ],
            [
                'nom' => 'Paint Ball',
                'description' => 'Bowling, a classic leisure activity,
                 invites friendly competition as you aim for strikes and spares on the polished lanes. ',
                'tel' => 'Add phone number ',
                'prix' => 30.00,
            ],
            [
                'nom' => 'Pottery',
                'description' => 'Pottery is an art form involving molding clay into various shapes, either by hand or on a wheel.
                 It\'s
                 a hands-on and therapeutic activity, offering a creative outlet for crafting functional or decorative items.',
                'tel' => 'Add phone number ',
                'prix' => 20.00,
            ],
            [
                'nom' => 'Bike Rentals',
                'description' => 'Bike rentals offer a flexible and affordable way to get around. Perfect for short trips,
                 they provide a convenient and eco-friendly alternative to traditional transportation. ',
                'tel' => 'Add phone number ',
                'prix' => 10.00,
            ],
            [
                'nom' => 'Bus City Tour',
                'description' => 'City tour buses offer a hassle-free way to explore key attractions.
                 Hop on and off at your preferred stops while enjoying informative commentary. It\'s a
                 convenient and efficient way to discover a city\'s highlights. ',
                'tel' => 'Add phone number ',
                'prix' => 40.00,
            ],
            [
                'nom' => 'Karting',
                'description' => 'Karting is a thrilling motorsport using small, open-wheel go-karts on specialized tracks.
                 It\'s a popular and
                accessible way to experience the excitement of racing, combining speed and maneuvering skills on the track. ',
                'tel' => 'Add phone number ',
                'prix' => 35.00,
            ],
        ];

        DB::table('activites')->insert($activites);
    }
}
