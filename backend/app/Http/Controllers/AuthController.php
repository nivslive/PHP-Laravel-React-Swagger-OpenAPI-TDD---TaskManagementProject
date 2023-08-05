<?php 
namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('guest');
    // }

    public function login(LoginRequest $request)
    {
        $user = \App\Models\User::where('email', $request->email)->first();
        //dd($user);
        if (!$user) {
            return response()->json([
                'message' => 'Credenciais inválidas ou dados não cadastrados.'
            ], 401);
        }

        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Credenciais inválidas ou dados não cadastrados.'
            ], 401);
        }

        $token = JWTAuth::fromUser($user);

        return response()->json([
            'message' => 'Logado com sucesso!',
            'token' => $token
        ], 200);
    }
}