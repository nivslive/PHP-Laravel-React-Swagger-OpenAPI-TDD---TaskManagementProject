<?php

use App\Http\Controllers\DepartamentoController;
use App\Http\Controllers\FuncionarioController;
use App\Http\Controllers\TarefaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function(){
    Route::get('/login', [AuthController::class, 'index']);
    Route::post('/login', [AuthController::class, 'login']);
});

Route::middleware('auth:jwt')->group(function() {
    Route::controller(DepartamentoController::class)->prefix('/departamentos')->group(function() {
        Route::get('/all', 'all');
        Route::get('/{id}', 'find');
        Route::post('/', 'create');
        Route::put('/', 'update');
        Route::delete('/', 'delete');
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
});

