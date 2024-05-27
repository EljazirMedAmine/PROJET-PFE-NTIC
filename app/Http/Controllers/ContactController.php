<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function sendemail(Request $request){
        // return view('contact');
        $request->validation([
            'email'=>'required|email',
            'subject'=>'required',
            'name'=>'required',
            'content'=>'required',
        ]);
        $data=[
            'subject'=>$request->subject,
            'name'=>$request->name,
            'email'=>$request->email,
            'content'=>$request->content
        ];

        Contact::send('email-template',$data, function($message) use ($data){
            $message->to($data['email'])->subject($data['subject']);
        });

        return back()->with(['message'=>'email successfuly sent!']);
    }
}
