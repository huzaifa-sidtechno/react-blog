<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;

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
    Route::get('/blog-comment/{id?}', [CommentController::class, 'index']);
    Route::post('/blog-comment/like/{id}', [CommentController::class, 'like']);
    Route::post('/blog-comment/unlike/{id}', [CommentController::class, 'unlike']);
    Route::post('/blog-comment-store', [CommentController::class, 'store']);
    Route::get('/blog-delete/{id?}', [BlogController::class, 'delete']);
});

// Public routes for authentication
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
