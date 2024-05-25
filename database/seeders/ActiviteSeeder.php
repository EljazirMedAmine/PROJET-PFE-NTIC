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
                'tel' => '06-353-289-75 ',
                'prix' => 45.99,
            ],
            [
                'nom' => 'Horse Riding',
                'description' => 'Horse riding transcends mere recreation; it\'s an immersive journey into a world where the bond between human and horse is forged through trust, communication, and mutual respect. As you saddle up and feel the rhythmic movement of your steed beneath you, a sense of freedom washes over you, carrying you away on a journey of exploration and connection. Whether you\'re meandering through sun-dappled forests, galloping across rolling hills, or simply enjoying the gentle sway of your horse\'s stride, every moment in the saddle is a testament to the timeless relationship between rider and horse.',
                'tel' => '06-853-133-75 ',
                'prix' => 25.50,
            ],
            [
                'nom' => 'Bowling',
                'description' => 'Bowling is more than just a game; it\'s a social experience that brings people together in a shared pursuit of fun, laughter, and friendly competition. From the satisfying clatter of pins being knocked down to the camaraderie of high-fives and victory dances, every frame is an opportunity to create lasting memories with friends and family. Whether you\'re aiming for a perfect strike or just trying to avoid the dreaded gutter ball, bowling offers a unique blend of skill, strategy, and sheer enjoyment that keeps players coming back for more. ',
                'tel' => '07-353-456-77 ',
                'prix' => 60.75,
            ],
            [
                'nom' => 'Paint Ball',
                'description' => 'Step onto the battlefield and prepare for an adrenaline-fueled adventure unlike any other. Paintball is more than just a game; it\'s a test of courage, teamwork, and tactical skill as players navigate through obstacle-strewn fields, dodging incoming fire and strategizing to outwit their opponents. With each burst of paint and every perfectly executed maneuver, players experience an unparalleled rush of excitement and camaraderie that bonds teams together in the heat of battle. Whether you\'re storming enemy lines, defending a strategic position, or orchestrating a daring ambush, paintball offers an immersive and exhilarating experience that leaves participants breathless and eager for more.',
                'tel' => '07-159-258-60 ',
                'prix' => 80.00,
            ],
            [
                'nom' => 'Pottery',
                'description' => "Delve into the ancient art of pottery and discover the transformative power of clay. From the moment your hands touch the supple earth, you're transported into a world of endless possibilities, where imagination takes shape and creativity knows no bounds. Whether you're spinning a masterpiece on the potter's wheel or meticulously sculpting intricate designs by hand, pottery is a deeply meditative and therapeutic practice that nurtures both mind and spirit. With each pinch, coil, and stroke, you breathe life into your creations, infusing them with your unique vision and passion. From functional vessels to sculptural masterpieces, pottery offers a canvas for self-expression and discovery that celebrates the beauty of imperfection and the joy of creation.",
                'tel' => '06-135-753-99 ',
                'prix' => 50.00,
            ],
            [
                'nom' => 'Bike Rentals',
                'description' => "Pedal your way to adventure with bike rentals that offer the freedom to explore your surroundings at your own pace. Whether you're cruising along scenic coastal paths, weaving through bustling city streets, or tackling rugged mountain trails, renting a bike opens up a world of possibilities for exploration and discovery. Feel the wind in your hair and the sun on your face as you pedal past iconic landmarks, hidden gems, and breathtaking vistas that can only be experienced on two wheels. With options available for riders of all ages and skill levels, bike rentals offer a convenient and eco-friendly way to immerse yourself in the beauty of your surroundings and create memories that will last a lifetime.",
                'tel' => '06-222-222-33 ',
                'prix' => 50.00,
            ],
            [
                'nom' => 'Bus City Tour',
                'description' => "Embark on a journey of discovery with city tour buses that offer a front-row seat to the rich tapestry of history, culture, and architecture that defines your destination. From iconic landmarks to hidden gems, hop-on-hop-off buses provide a convenient and immersive way to explore the sights and sounds of the city at your own pace. Sit back, relax, and enjoy informative commentary that illuminates the stories behind each stop, offering insights into the people, events, and traditions that have shaped the city's identity. Whether you're snapping photos from the open-air top deck or mingling with fellow travelers in the cozy confines of the lower level, city tour buses promise an unforgettable experience that captures the essence of your destination and leaves you with a newfound appreciation for its rich heritage and vibrant culture.",
                'tel' => '06-699-574-55 ',
                'prix' => 80.00,
            ],
            [
                'nom' => 'Karting',
                'description' => "Strap in and prepare for a heart-pounding adrenaline rush as you take to the track in a high-speed karting adventure that pushes the limits of speed, skill, and strategy. From hairpin turns to straightaway sprints, karting offers an exhilarating blend of thrills and excitement that appeals to drivers of all ages and experience levels. Whether you're battling for position in a tight pack of competitors or laying down blistering lap times in a solo time trial, karting tests your reflexes, precision, and nerve as you navigate the twists and turns of the circuit with lightning-fast reflexes and split-second decision-making. With its combination of speed, strategy, and sheer excitement, karting promises an unforgettable racing experience that leaves participants breathless and eager for more.",
                'tel' => '06-258-852-45 ',
                'prix' => 200.00,
            ],
        ];

        DB::table('activites')->insert($activites);
    }
}
