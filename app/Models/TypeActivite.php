<?php

namespace App\Models;

use App\Models\Activite;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TypeActivite extends Model
{
    use HasFactory;
    protected $guarded =[];
    public function Activite(){
        return $this->belongsTo(Activite::class,"id_activite");
    }

}
