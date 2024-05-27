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
                'photo_2'=>'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/da/94/67/hilton-tanger-city-center.jpg?w=700&h=-1&s=1',
                'photo_3'=>'https://cf.bstatic.com/xdata/images/hotel/max1024x768/538047083.jpg?k=0318947d891cbfe01a527b19e401610abd3c4ecdadc31a06de9a65fae676759b&o=&hp=1',
                'photo_4'=>'https://www.hilton.com/im/en/TNGCCHI/1130343/tngcc-jacuzzi-2.jpg?impolicy=crop&cw=5376&ch=3010&gravity=NorthWest&xposition=0&yposition=287&rw=768&rh=430',
                'description' => '
                Hilton Tanger Playa: A chic beachfront hotel in Tangier, Morocco, offering modern accommodations and stunning sea views, perfect for a relaxing coastal getaway.',
                'rate'=> 4,
                'prix' => '100',
                'localisation' => "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25896.604001351614!2d-5.8094195!3d35.7735217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b809c4dc6b2b7%3A0xa10c2e20ea93c3db!2sHilton%20Garden%20Inn%20Tanger%20City%20Center!5e0!3m2!1sen!2sma!4v1716748160574!5m2!1sen!2sma",
                'chambre_1'=>'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539415717.jpg?k=4ec706d7f5ab85eeb6cc7307114cf8f991a2c5ccfb179f4c4808648d1c81d1c9&o=&hp=1',
                'chambre_2'=>'https://pix10.agoda.net/hotelImages/2241497/-1/3979f72de29adb1c947eacd9e75799c8.jpg?ca=20&ce=0&s=414x232',
                'chambre_3'=>'https://cf.bstatic.com/xdata/images/hotel/max1024x768/490839806.jpg?k=716a8477a4fea0e5bd1e6b9064dfd9763acdb526c4b798d6a5e1b7b41138b9cf&o=&hp=1',

            ],
            [
                'nom' => 'Ibis',
                'photo'=>'https://cf.bstatic.com/xdata/images/hotel/max1024x768/163481538.jpg?k=37275e18d7d2b7bd0fa2f18dcbd7d4f498efda6ca6f0a7edab7214ea850fe5b8&o=&hp=1',
                'photo_2'=>'https://cf.bstatic.com/xdata/images/hotel/max1024x768/163481547.jpg?k=ebce49dd4f8e410cfdc9532bf70f0cb3410922d62ce4ccdb6fd6b197a18fc3ac&o=&hp=1',
                'photo_3'=>'https://www.hotel.de/de/media/image/b9/a0/2e/ibis_Tanger_City_Center-Tanger-Aussenansicht-12-525711_1280x1280.jpg',
                'photo_4'=>'https://cf.bstatic.com/xdata/images/hotel/max1024x768/45745024.jpg?k=31b86666b3221d09e7b4c1256ce82722ba90bec182cdf47f3b47da81eb893018&o=&hp=1',
                'description' => '
                Ibis Tanger Playa: A modern beachfront hotel in Tangier, Morocco, offering comfortable rooms and convenient amenities for a pleasant stay near the sea. Ideal for travelers seeking affordability without sacrificing comfort.',
                'rate'=> 3,
                'prix' => '60',
                'localisation' => 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d103586.22816348891!2d-5.8712219!3d35.7736659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b809cc820c5f9%3A0x715c07f81afa8b4a!2sibis%20Tanger%20City%20Center!5e0!3m2!1sen!2sma!4v1716760741737!5m2!1sen!2sma',
                'chambre_1'=>'https://www.hotelscombined.fr/himg/41/f6/4a/ice-115027526-63837667_3XL-841643.jpg',
                'chambre_2'=>'https://images.trvl-media.com/lodging/5000000/4180000/4177500/4177427/59d2a9bb.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
                'chambre_3'=>'https://www.ahstatic.com/photos/6812_rotwc_00_p_1024x768.jpg',

            ],
            [
                'nom' => 'Movenpick',
                'photo'=>'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/9b/0b/80/interior-view.jpg?w=1200&h=-1&s=1',
                'photo_2'=>'https://www.ahstatic.com/photos/b4q1_ho_00_p_1024x768.jpg',
                'photo_3'=>'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/91/0c/5d1e6bcaca0363be5f86fd56354c7828ad40406c7bd53a27e61f5926be1c.jpeg',
                'photo_4'=>'https://www.kayak.fr/rimg/himg/8d/3f/79/ice-133391-68049798_3XL-769501.jpg?width=1366&height=768&crop=true',
                'description' => '
                Movenpick Tanger City Center: A luxurious hotel in the heart of Tangier, Morocco, featuring elegant rooms, upscale amenities, and stunning views of the city and Mediterranean Sea. Ideal for both business and leisure travelers seeking a sophisticated stay in Tangier.',
                'rate'=> 5,
                'prix' => '140',
                'localisation' => 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3399769.9214258906!2d-9.5305948!3d33.6807903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7f5ba3a5726d%3A0xdf84cb8dcb6ba43c!2sM%C3%B6venpick%20Hotel!5e0!3m2!1sen!2sma!4v1716760919456!5m2!1sen!2sma',
                'chambre_1'=>'https://www.ahstatic.com/photos/b4q1_rotwbpv_00_p_1024x768.jpg',
                'chambre_2'=>'https://www.hotelscombined.fr/himg/a8/b5/c5/ice-208272790-68049786_3XL-925593.jpg',
                'chambre_3'=>'https://www.ahstatic.com/photos/b4q1_rokgbpv_00_p_1024x768.jpg',

            ],
            [
                'nom' => 'Farah',
                'photo'=>'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/e4/f7/1b/outside.jpg?w=700&h=-1&s=1',
                'photo_2'=>'https://cf.bstatic.com/xdata/images/hotel/max1024x768/131329216.jpg?k=41fe7f0752612cfa3638fba72b6ec896814e9ef9f9bed3b14acaa74e97fd7fb9&o=&hp=1',
                'photo_3'=>'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_380,q_auto,w_240//hotelier-images/c8/7b/3da6efd0cda42690901e708d046c3c7f4bc36230d8abe8b4874793f7e690.jpeg',
                'photo_4'=>'https://cf.bstatic.com/xdata/images/hotel/max1024x768/309924744.jpg?k=e8df210648f0c8068eafa3c9ca778e05712da71018e21e7665df3ee863b4f534&o=&hp=1',
                'description' => '
                Farah Tanger: A stylish hotel in Tangier, Morocco, blending modern comfort with Moroccan hospitality. Conveniently located near the city center, it offers comfortable rooms, dining options, and leisure facilities for a memorable stay.',
                'rate'=> 4,
                'prix' => '80',
                'localisation' => 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d414553.39352001995!2d-5.8161373!3d35.7336356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7f93a1bfa4cb%3A0xbeeec552a5c7968a!2sFarah%20Hotel%20Tanger!5e0!3m2!1sen!2sma!4v1716761094714!5m2!1sen!2sma',
                'chambre_1'=>'https://cf.bstatic.com/xdata/images/hotel/max1024x768/131334873.jpg?k=e7bc2db240b7aad0c1f28f93302187977471719551a65d232669a0e7b072470a&o=&hp=1',
                'chambre_2'=>'https://images.trvl-media.com/lodging/8000000/7760000/7756600/7756502/3e7cdf3d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium',
                'chambre_3'=>'https://cf.bstatic.com/xdata/images/hotel/max1024x768/131329066.jpg?k=01b40db2f7aa3665095e1e7444fab265b13d346fbb9c67456caaf5ff840ddc55&o=&hp=1',

            ],
            [
                'nom' => 'Hilton Tanger Alhoura',
                'photo'=>'https://images.trvl-media.com/lodging/28000000/27730000/27721600/27721577/03447904.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
                'photo_2'=>'https://www.hilton.com/im/en/TNGAHHI/10236446/tngah-lobby-4.jpg?impolicy=crop&cw=5000&ch=2796&gravity=NorthWest&xposition=0&yposition=542&rw=768&rh=430',
                'photo_3'=>'https://www.hilton.com/im/en/TNGAHHI/9661486/tngah-pool-1.jpg?impolicy=crop&cw=5286&ch=2959&gravity=NorthWest&xposition=0&yposition=282&rw=768&rh=430',
                'photo_4'=>'https://www.hilton.com/im/en/TNGAHHI/10236494/tngah-tangier-exterior.jpg?impolicy=crop&cw=5887&ch=3296&gravity=NorthWest&xposition=0&yposition=314&rw=768&rh=430',
                'description' => 'Hilton Tanger Al Houara Resort & Spa is a five-star beachfront resort in Tangier, Morocco. It offers luxurious rooms and suites with ocean and garden views, multiple dining options, a full-service spa, swimming pools, and various recreational activities. Known for its exceptional service, it provides a perfect blend of modern amenities and traditional Moroccan charm for a memorable stay.',
                'rate'=> 5,
                'prix' => '180',
                'localisation' => 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12965.549184685255!2d-5.9658372!3d35.6674645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b8fc9fe02d907%3A0x1c98273f308ecd7e!2sHilton%20Tangier%20Al%20Houara%20Resort%20%26%20Spa!5e0!3m2!1sen!2sma!4v1716761474651!5m2!1sen!2sma',
                'chambre_1'=>'https://pix10.agoda.net/property/23932966/330563943/3af2a7fc0202ce7ced236f098d929906.jpg?ca=18&ce=1&s=414x232',
                'chambre_2'=>'https://www.hilton.com/im/en/TNGAHHI/5452800/alh-300k-hilton-image-3-.jpg?impolicy=resize&rh=292&rw=437',
                'chambre_3'=>'https://www.hilton.com/im/en/TNGAHHI/14548756/deluxe-king-roomgarden-view.jpg?impolicy=crop&cw=3750&ch=2812&gravity=NorthWest&xposition=625&yposition=0&rw=1200&rh=900',

            ],
        ];

        DB::table('hotels')->insert($hotels);
    }
}
