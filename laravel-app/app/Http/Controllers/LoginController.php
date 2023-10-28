<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])) 
        {
            $user = Auth::user();
            $arr = array('acceso' => "OK", 'error' => "");

            return json_encode($arr);
        }
        else {
            $arr = array("acceso" => "", 'error' => "No existe el usuario o contraseña");
            return json_encode($arr);
        }
    }
}
