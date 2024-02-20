<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    // Retrieve authenticated user details
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Blog related routes
    Route::post('/create-blog', [BlogController::class, 'store']);
    Route::post('/update-blog', [BlogController::class, 'update']);
    Route::get('/blog/{id?}', [BlogController::class, 'index']);
});

// Public routes for authentication
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
