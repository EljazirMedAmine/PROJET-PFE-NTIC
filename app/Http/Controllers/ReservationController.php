<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Chambre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReservationController extends Controller
{
    public function index()
    {
        $reservations = Reservation::all();
        return response()->json(['reservations' => $reservations]);
    }

    public function create()
    {
        $chambres = Chambre::all();
        return response()->json(['chambres' => $chambres]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'date_debut' => 'required|date',
            'date_fin' => 'required|date',
            'nbr_personne' => 'required|integer',
            'nbr_nuit' => 'required|integer',
            'type_chambre_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $chambre = Chambre::where('type_chambre_id', $request->type_chambre_id)
            ->whereDoesntHave('reservations', function ($query) use ($request) {
                $query->where(function ($query) use ($request) {
                    $query->whereBetween('date_debut', [$request->date_debut, $request->date_fin])
                          ->orWhereBetween('date_fin', [$request->date_debut, $request->date_fin])
                          ->orWhereRaw('? BETWEEN date_debut AND date_fin', [$request->date_debut])
                          ->orWhereRaw('? BETWEEN date_debut AND date_fin', [$request->date_fin]);
                });
            })->first();

        if (!$chambre) {
            return response()->json(['error' => 'No available room of this type for the selected dates.'], 400);
        }

        $reservation = new Reservation();
        $reservation->date_debut = $request->date_debut;
        $reservation->date_fin = $request->date_fin;
        $reservation->nbr_personne = $request->nbr_personne;
        $reservation->nbr_nuit = $request->nbr_nuit;
        $reservation->type_chambre_id = $request->type_chambre_id;
        $reservation->save();

        $chambre->disponible = false;
        $chambre->save();

        return response()->json([
            'message' => 'Reservation has been successfully added.',
            'chambre_id' => $chambre->id,
            'chambre_numero' => $chambre->numero,
        ]);
    }

    public function destroy(string $id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->delete();

        return response()->json(['message' => 'Reservation has been successfully deleted.']);
    }

    public function indexR(Request $request)
    {
        $filters = $request->only(['nbr_personne', 'date_debut', 'date_fin', 'typeChambre']);
        $reservations = Reservation::search($filters)->get();

        return response()->json(['reservations' => $reservations]);
    }

    public function store1(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'date_debut' => 'required|date',
            'date_fin' => 'required|date',
            // 'statu' => 'required|string',
            // 'date_reservation' => 'required|date',
            'nbr_personne' => 'required|integer',
            // 'nbr_children' => 'required|integer',
            'nbr_nuit' => 'required|integer|max:30',
            'id_chambre' => 'required|integer',
            // 'id_user' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $existingReservation = Reservation::where('id_chambre', $request->id_chambre)
            ->where(function($query) use ($request) {
                $query->whereBetween('date_debut', [$request->date_debut, $request->date_fin])
                      ->orWhereBetween('date_fin', [$request->date_debut, $request->date_fin])
                      ->orWhere(function($query) use ($request) {
                          $query->where('date_debut', '<=', $request->date_debut)
                                ->where('date_fin', '>=', $request->date_fin);
                      });
            })->first();

        if ($existingReservation) {
            return response()->json(['error' => 'The room is already reserved for this period.'], 400);
        }

        Reservation::create($request->all());

        return response()->json(['message' => 'Reservation has been successfully added.']);
    }
}
