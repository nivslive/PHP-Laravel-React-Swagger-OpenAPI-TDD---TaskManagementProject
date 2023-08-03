<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateFuncionarioRequest;
use App\Http\Requests\StoreFuncionarioRequest;
use App\Http\Requests\UpdateFuncionarioRequest;
use App\Models\Funcionario;
use Illuminate\Http\JsonResponse;

class FuncionarioController extends Controller implements CRUDControllerInterface
{

    public function all() {}
    public function find($id) {

    }
    public function create(CreateFuncionarioRequest $request)
    {

        $funcionario = Funcionario::create($request->except('_token'));

        if(!$funcionario) {
            return response()->json(['message' => 'Não foi possível criar um funcionário.'], 500);
        }

        return response()->json(['message' => 'Funcionário criado com sucesso.', 'data' => $funcionario], 200);
    }

    public function update(UpdateFuncionarioRequest $request, $id): JsonResponse

    {
        $funcionario = Funcionario::find($id);

        if(!$funcionario) {
            return response()->json(['message' => 'Não foi possível achar um funcionário.'], 500);
        }

        return response()->json(['message' => 'Funcionário editado com sucesso.', 'data' => $funcionario], 200);
    }

    public function delete(Funcionario $funcionario)
    {
        //
    }
}
