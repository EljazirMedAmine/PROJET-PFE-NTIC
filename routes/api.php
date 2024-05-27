<?php

use App\Http\Controllers\ActiviteController;
use App\Http\Controllers\CinemaController;
use App\Http\Controllers\EmplacementController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\TypeActiviteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group( function() {
    Route::get('/user', function (Request $request) {
    return $request->user();
});
});

Route::apiResource('emplacements' , EmplacementController::class);

Route::apiResource('restaurants', RestaurantController::class);

Route::apiResource('cinemas', CinemaController::class);

Route::apiResource('hotels', HotelController::class);

Route::apiResource('activites', ActiviteController::class);

Route::apiResource('typeActivite', TypeActiviteController::class);

Route::apiResource('photo', PhotoController::class);

Route::apiResource('reservations', ReservationController::class);

Route::apiResource('chambres', ReservationController::class);




