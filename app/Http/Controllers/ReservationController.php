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
            'id_chambre' => 'required|integer|exists:chambres,id',
            // 'id_utilisateur' => 'required|integer|exists:utilisateurs,id',
            'id_hotel' => 'required|integer|exists:hotels,id',
            // 'id_activite' => 'required|integer|exists:activites,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $existingReservation = Reservation::where('id_chambre', $request->id_chambre)
            ->where(function ($query) use ($request) {
                $query->whereBetween('date_debut', [$request->date_debut, $request->date_fin])
                      ->orWhereBetween('date_fin', [$request->date_debut, $request->date_fin])
                      ->orWhereRaw('? BETWEEN date_debut AND date_fin', [$request->date_debut])
                      ->orWhereRaw('? BETWEEN date_debut AND date_fin', [$request->date_fin]);
            })->first();

        if ($existingReservation) {
            return response()->json(['error' => 'The room is already reserved for this period.'], 400);
        }

        $reservation = new Reservation();
        $reservation->date_debut = $request->date_debut;
        $reservation->date_fin = $request->date_fin;
        $reservation->nbr_personne = $request->nbr_personne;
        $reservation->nbr_nuit = $request->nbr_nuit;
        $reservation->id_chambre = $request->id_chambre;
        // $reservation->id_utilisateur = $request->id_utilisateur;
        $reservation->id_hotel = $request->id_hotel;
        // $reservation->id_activite = $request->id_activite;
        $reservation->save();

        return response()->json(['message' => 'Reservation has been successfully added.']);
    }

    public function destroy(string $id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->delete();

        return response()->json(['message' => 'Reservation has been successfully deleted.']);
    }

    public function indexR(Request $request)
    {
        $filters = $request->only(['nbr_personne', 'date_debut', 'date_fin', 'nbr_lit']);
        $reservations = Reservation::where($filters)->get();

        return response()->json(['reservations' => $reservations]);
    }

    public function store1(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'date_debut' => 'required|date',
            'date_fin' => 'required|date',
            'nbr_personne' => 'required|integer',
            'nbr_nuit' => 'required|integer|max:30',
            'id_chambre' => 'required|integer|exists:chambres,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $existingReservation = Reservation::where('id_chambre', $request->id_chambre)
            ->where(function ($query) use ($request) {
                $query->whereBetween('date_debut', [$request->date_debut, $request->date_fin])
                      ->orWhereBetween('date_fin', [$request->date_debut, $request->date_fin])
                      ->orWhere(function ($query) use ($request) {
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
