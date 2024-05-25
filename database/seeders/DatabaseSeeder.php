<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\HotelSeeder;
use Database\Seeders\photoSeeder;
use Database\Seeders\CinemaSeeder;
use Database\Seeders\ActiviteSeeder;
use Database\Seeders\RestaurantSeeder;
use Database\Seeders\EmplacementSeeder;
use Database\Seeders\TypeActiviteSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            ActiviteSeeder::class,
            CinemaSeeder::class,
            EmplacementSeeder::class,
            HotelSeeder::class,
            RestaurantSeeder::class,
            TypeActiviteSeeder::class,
            photoSeeder::class,

        ]);
    }
}
