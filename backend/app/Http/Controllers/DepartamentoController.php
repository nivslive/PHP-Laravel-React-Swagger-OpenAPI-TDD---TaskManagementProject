<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateDepartamentoRequest;
use App\Http\Requests\StoreDepartamentoRequest;
use App\Http\Requests\UpdateDepartamentoRequest;
use App\Models\Departamento;
use Illuminate\Http\JsonResponse;

class DepartamentoController extends Controller
{

    public function all() {
        return Departamento::all();
    }
    public function find($id) {
        $departamento = Departamento::find($id);
        if(!$departamento) {
            return response()->json(['message' => 'Não foi possível achar um departamento.'], 500);
        }
        return response()->json(['message' => 'Departamento editado com sucesso.', 'data' => $departamento], 200);
    }
    public function create(CreateDepartamentoRequest $request)
    {

        $departamento = Departamento::create($request->except('_token'));

        if(!$departamento) {
            return response()->json(['message' => 'Não foi possível criar um departamento.'], 500);
        }

        return response()->json(['message' => 'Departamento criado com sucesso.', 'data' => $departamento], 200);
    }

    public function update(UpdateDepartamentoRequest $request, $id): JsonResponse

    {
        $departamento = Departamento::find($id);
        if(!$departamento) {
            return response()->json(['message' => 'Não foi possível achar um departamento.'], 500);
        }

        $departamento->update($request->except('_token'));
        return response()->json(['message' => 'Departamento editado com sucesso.', 'data' => $departamento], 200);
    }

    public function delete($id)
    {
        $departamento = Departamento::find($id);
        if(!$departamento) {
            return response()->json(['message' => 'Não existe esse departamento.'], 500);
        }
        $departamento->delete();
        return response()->json(['message'=> 'Departamento apagada com sucesso.'], 200);
    }
}
