<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ChambreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $chambres = [
            ['num' => 101, 'nbr_lit' => 2],
            ['num' => 102, 'nbr_lit' => 1],
            ['num' => 103, 'nbr_lit' => 3],
            ['num' => 104, 'nbr_lit' => 2],
            ['num' => 105, 'nbr_lit' => 1],
            ['num' => 106, 'nbr_lit' => 2],
            ['num' => 107, 'nbr_lit' => 3],
            ['num' => 108, 'nbr_lit' => 1],
            ['num' => 109, 'nbr_lit' => 2],
            ['num' => 110, 'nbr_lit' => 3],
            ['num' => 111, 'nbr_lit' => 1],
            ['num' => 112, 'nbr_lit' => 2],
        ];
        DB::table('chambres')->insert($chambres);

}
}
