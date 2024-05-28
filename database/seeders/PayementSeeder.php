<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PayementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $payements = [
            [
                'Numero_de_carte' => '1234567812345678',
                'Numero_de_carte2' => '8765432187654444',
                'nom' => 'John Doe',
                'Date_expiration' => '12/25',
                'Cryptogramme' => '123',
            ],
            [
                'Numero_de_carte' => '3456789034567890',
                'Numero_de_carte2' => '6543219876543210',
                'nom' => 'Alice Johnson',
                'Date_expiration' => '10/23',
                'Cryptogramme' => '789',
            ],
            [
                'Numero_de_carte' => '8888888888888888',
                'Numero_de_carte2' => '333333333333333',
                'nom' => 'aya',
                'Date_expiration' => '09/22',
                'Cryptogramme' => '012',
            ],
            [
                'Numero_de_carte' => '4444444444444444',
                'Numero_de_carte2' => '1111111111111111',
                'nom' => 'ferdaous',
                'Date_expiration' => '11/24',
                'Cryptogramme' => '456',
            ],
        ];
        DB::table('payement')->insert($payements);
    }
}
