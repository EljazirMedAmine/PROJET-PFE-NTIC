<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TypeActiviteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $typeActivite=[
            [
              'id_activite'=> 1,
              'photo'=> 'https://s3-alpha-sig.figma.com/img/dd86/02e6/a83033d6b02c188194e1d1e231fd58d9?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RDntUzzWuoE6DblnhjtsJkdEmumKvEtckzX4FOE1FX0PxaWybWLa7onA65e3~gs1kpBFTHR5LyUndkumUmOoY4Ytymrh-VcvpwuPRu96zlZtqYumqnYUlexyaA6e-W-hMQOdq20TB0y5Bwpi7x6-~IJnH8IyxKRbHnJRvfGUsP1ONnqUE1yWaOetuqMkFDDI9XreQciuDD1K4AoNolzDX00Iy6sFG7dRwx9O~evd0N9A4cIq8ShNff9ItyN8~dBK6disAuuTVIWI8Rtw0WyP7J6o16wZ12~8cz92YG8idzySFdPqkBG4ajmbKP~xZMpn1~uNp9sbqqifdzGtkkONMw__'
            ],
            [
                'id_activite'=> 2,
                'photo'=> 'https://s3-alpha-sig.figma.com/img/9751/04f9/827036ff1c22d1384273d8342fc6df3e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JmnqQ6bif9YrJPPF7vJQY~iXMRzlepTYhGBwG7dv3ogkVOe8iluOhVR56zrrSPGrbmdBb1YhFg0C0uhtxGr85Y2UNefoYph3X0r7mc3R7lw5L1FQ2iY5pUJTmZyfV~rBbTFiVwDL8bBLmcrW5JLZhKZVkF6pM14A-lOt0r-0aNZTOevKTwt7t-BVUSPbT1DKDsx0WnYmEo~By2vZ1hl0spLshB6GT~Ry5Ja~uLHV6wZ3fl0E2djymkZAlwxpGHG3TsCPniumWrS1MHZRZTkfJzfYfXcbKO302ZU1mO4scZcvxhASxjwmpC-WUWy8~slFQKTwl9MDHfvhD5u1--kMcw__'
              ],
            [
                'id_activite'=> 3,
                'photo'=> 'https://s3-alpha-sig.figma.com/img/b74f/f25b/e78cfa416e8747d6811dc2a44e36c0fa?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n0ZmI5v9-PyKG8Iy9QdwdpjhEM9vUroPbYYopKWkfv2rf2IaiJR7gXEvxwvWyajPSnbIdJNnz2nLLpVKvHX2SOUoVGG4Ir36vYFwrXjsLXw7M8jIWMWqYjbCHbQRV9Y6XuKrmzwXUzJUoHfJTQB1OP7wwPWcz3IvzKtQ6dMQkZ88k2YCCocK0YR4d6Jpr4QfOegRCKU6~8FFzR-WnUFnOpFHRzYdX2mL-5WtYXdX27phz8Jfw1rjeeACnaHdcP37ZlrjLynIKIRlD9aCZ3cFK94ERgIcHnZxDCvjStKUjxnyLW0WJlqyLP3OKI2Kpwifn--Q~Qqh2aCBFxkzhbl6BA__'
            ],
            [
                'id_activite'=> 4,
                'photo'=> 'https://s3-alpha-sig.figma.com/img/b6bc/7d90/a65fc9760ce11dfe6db2c71bcc09519e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WxGzpXf9UnlWpQ738ej7XQ4cao-ZxHxaWbuPdlhe3w7EnlP3wBDFk24d3JgQzJQpLnBdnFQhKT9iyU1ddNZ-CaTaF8pwVU21e4CgC7Lz5RD4-25p3aAKbHVVW8tn3wVAgc6~Sz92l8h2R-TJZqHJePb7D4~AhVFXLqSXBRPZA0X~~9GPsEPxbo1Zi95FJ2Nkx-s1Le4w1lJEJ8poGnzLmdqZpI3vTioCm11vdAcMVSVT-ccvmdBcdwN2X7eWUkowqfiRmWCirW1RwLsaXcoYDgltwhE6SrhDuwpjGI3FPaOrwyyFIENRtisuvFLx667kR28c85XHs4coChrODtMUHg__'
            ],
            [
                'id_activite'=> 5,
                'photo'=> 'https://s3-alpha-sig.figma.com/img/f19c/3ad9/70bef0514fb32586423bbf7416192cce?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BRiyvA2O3XWw~tX97nppS2EmUamOlTbXs41-zCfweqPmhiCkaVz3mRZKH3M9ePyGOL9kgN0Y~vzwuHhhmwX5VHH7ZmkHFD6e9i5TMIn5eMKiu3BDwd3JN9GnSap6DTaDt5c-3ilhzaRApTW54g8MggAXHHY7RdOKG3uieODunzZEGPumGcV1o20UrtVofr8H9B-QokrEznwhBG1e3EZ9Fe3nTj9q4IoN3ASxUmn20f7t3~q-YEdgqces2hza~G62qCljhX7JTiwsfn30Mgw~tvr76vCM1pFZv5cSHr2owKtZZ7UyF-tXrRlHGGC4ULfhRtUA2xzhLQo9L6HoZuHSaw__'
            ],
            [
                'id_activite'=> 6,
                'photo'=> 'https://s3-alpha-sig.figma.com/img/427e/785a/dea996c641d28cbf4a1f0a5252a2ba92?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HwSfoyynjYNzYHwtFrTwrjDyy09Wg2iwbf0Mpn~~HCyk1qFFW6w36q9RMB8JHCkrZLZ3Ee8drEYq~qK6o2mAB82yjFRkeWuD58npHWIwDgfBZ4vnRh7u1Qiy~zlsDYomGn~gAbKtbn5vjj5muqrH1tPZ5ZqWboVGREgtIGtSofTM8A-QR8D7SByxUMFqm2EBh~44pVy6ZCBeUtcCTmB72FIoWL3zsynUdaKzeB6Pnd~YbG-35l27xSBC-UJAT9Ht2ywPh5wIp47PAgqv7lOlWTZAOB9O2Yr0keBkleyk8QJujbCZCaVH~bjWSTLnHyuz~TeqB-ElSzDBnMLdy4bVHA__'
            ],
            [
                'id_activite'=> 7,
                'photo'=> 'https://s3-alpha-sig.figma.com/img/9c4a/761a/0168c39cc791a7dbcfba9555d4b45691?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d1Vsn3Xc6pYHNgC3lzc9cynEQ7whja5IrnsGcLlaemJ7kVpOhGZnIB6arQR-jrlOVnuCyOVExq6TxhhcWynV1i5UvVWMIbW-kbZclmUnV6f7OCjpc2wOR1xL1PACocCOWYrIZB88wai94dcK164wzfqmFggRyFoBE~szZMT94aK2P5oCVVaoBhGG7A79SqySoeFYVLlsWMKce0wO6ghl0v1qml7GFk3xkGSIe9iVU8R3ljMa7e5XeJoDmAcYhyGzaEvMOq0Q34DbFk2lMgSgQNYyBFb2Kl50L1a3xADwByODJvvy66Q~NL2Ix3kDjdhlTCBI4wIrfPTfwUsomvNYng__'
            ],
            [
                'id_activite'=> 8,
                'photo'=> 'https://s3-alpha-sig.figma.com/img/4f85/201d/8969328b6762de7a7648b25c9afcc205?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SYviMzMsUkNlbYwD5he1MAO~cO9Vqkeu46yUxt4gav0q9ShL6QozI9tR27cq0JERXgcNjQ8ocQUmpeWT4dFrKIKEmHcZp1JgFxPXPQuIrJyx4V5y3t2dJAOV25r44W3VsRs9-xMC4A3UnM0n2CUcZScIqSqFUuPX1dujom31-Qy-9m9VuKQpUqpLq59pjeQzbcf4mbWfDzUQN7OquClM1svLAK9qbR7T7ejCedFsjfu6xXfbvAG7joDISzmnD9NgKKYJHslnk93j2rU8cePjGWa45CQybWm~gTnIvZt-9edDSbJAlVCN6637cekJU-0a-kS41PDed-ydNyw26ojpTg__'
            ],
        ];
        DB::table('type_activites')->insert($typeActivite);
    }
}
