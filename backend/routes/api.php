<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PostController;


Route::middleware('api')->group(function () {
    Route::post('auth/register', [AuthController::class, 'register']);
    Route::post('auth/login', [AuthController::class, 'login']);

    Route::middleware('auth:api')->group(function () {
        Route::get('posts', [PostController::class, 'index']);
        Route::get('posts/{id}', [PostController::class, 'details']);
        Route::post('posts', [PostController::class, 'store']);
        Route::put('posts/{id}', [PostController::class, 'update']);
        Route::delete('posts/{id}', [PostController::class, 'delete']);
    });
});


