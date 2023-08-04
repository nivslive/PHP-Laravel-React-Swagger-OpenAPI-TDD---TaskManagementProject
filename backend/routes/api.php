<?php

use App\Http\Controllers\DepartamentoController;
use App\Http\Controllers\FuncionarioController;
use App\Http\Controllers\TarefaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/api-test', function() {
    return 'Hi! Welcome to API.';
});

Route::controller(AuthController::class)->group(function(){
    Route::get('/login', [AuthController::class, 'index']);
    Route::post('/login', [AuthController::class, 'login']);
});

// Route::middleware(['auth:jwt','cors'])->group(function() {
    Route::controller(DepartamentoController::class)->prefix('/departamentos')->group(function() {
        Route::get('/all', 'all');
        Route::get('/{id}', 'find');
        Route::post('/', 'create');
        Route::put('/{id}', 'update');
        Route::delete('/{id}', 'delete');
    });
    
    Route::controller(FuncionarioController::class)->prefix('/funcionarios')->group(function() {
        Route::get('/all', 'all');
        Route::get('/{id}', 'find');
        Route::post('/', 'create');
        Route::put('/{id}', 'update');
        Route::delete('/{id}', 'delete');
    });
    
    Route::controller(TarefaController::class)->prefix('/tarefas')->group(function() {
        Route::get('/all', 'all');
        Route::get('/{id}', 'find');
        Route::post('/', 'create');
        Route::put('/{id}', 'update');
        Route::delete('/{id}', 'delete');
    });
// });

