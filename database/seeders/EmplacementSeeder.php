<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmplacementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $emplacements = [
            [
                'nom' => 'Cap Spartel',
                'description' => 'Add description ',
            ],
            [
                'nom' => 'Mnar',
                'description' => 'Add description',
            ],
            [
                'nom' => 'Mrqala',
                'description' => 'Add description ',
            ],
            [
                'nom' => 'Rmilat',
                'description' => 'Add description',
            ],
        ];

        DB::table('emplacements')->insert($emplacements);
    }
}

