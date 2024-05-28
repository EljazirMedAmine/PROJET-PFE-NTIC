<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ActiviteController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\ReservationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::get('/contact', [ContactController::class, 'show'])->name('contact.show');

Route::get('activities/{id}', [ActiviteController::class, 'show']);
Route::get('hotels/{id}', [HotelController::class, 'show']);

Route::get('/contactus' , [ContactController::class , 'sendemail']);

// Route::get('/resrvation' , [ReservationController::class , 'show']);


Route::get('/reservations', [ReservationController::class, 'index']);
Route::get('/chambres', [ReservationController::class, 'create']);
Route::post('/reservations', [ReservationController::class, 'store']);
Route::delete('/reservations/{id}', [ReservationController::class, 'destroy']);
Route::get('/reservations/search', [ReservationController::class, 'indexR']);
Route::post('/reservations/store1', [ReservationController::class, 'store1']);
