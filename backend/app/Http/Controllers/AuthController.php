<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Placeholder for registration logic
        return response()->json(['message' => 'Registration endpoint']);
    }

    public function login(Request $request)
    {
        // Placeholder for login logic
        return response()->json(['message' => 'Login endpoint']);
    }
}
