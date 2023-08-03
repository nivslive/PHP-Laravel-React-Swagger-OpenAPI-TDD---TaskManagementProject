<?php

namespace App\Http\Controllers;

use App\Http\Requests\{StoreTarefaRequest, EditTarefaRequest, UpdateTarefaRequest};
use App\Models\Tarefa;
use OpenApi\Annotations as OA;
use \Illuminate\Http\JsonResponse;

class TarefaController extends Controller
{
    /**
     * @OA\Post(
     *      path="/tarefas",
     *      @OA\Response(
     *          response=200,
     *          description="Tarefas returned successfully!",
     *      ),
     *     @OA\PathItem (
     *     ),
     * )
     */
    public function create(StoreTarefaRequest $request)
    {

        $tarefa = Tarefa::create($request->except('_token'));

        if(!$tarefa) {
            return response()->json(['message' => 'Não foi possível criar a tarefa.'], 500);
        }

        return response()->json(['message' => 'Tarefa criada com sucesso.', 'data' => $tarefa], 200);
    }

    /**
     * @OA\Get(
     *      path="/tarefas/{tarefa_id}",
     *      @OA\Parameter(
     *          name="tarefa_id",
     *          description="ID da tarefa",
     *          required=true,
     *          in="path",
     *          @OA\Schema(type="integer")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Tarefas returned successfully!",
     *      ),
     * )
     */
    public function find($tarefa_id)
    {

        $tarefa = Tarefa::find($tarefa_id);

        if(!$tarefa) {
            return response()->json(['message' => 'Não existe essa tarefa.'], 500);
        }

        return response()->json(['message' => 'Sucesso ao encontrar a tarefa do id ' . $tarefa_id, 'data' => $tarefa], 200);
    }

    /**
     * @OA\Get(
     *      path="/tarefas/all",
     *      @OA\Response(
     *          response=200,
     *          description="Tarefas returned successfully!",
     *      ),
     *     @OA\PathItem (
     *     ),
     * )
     */
    public function all() {
        return Tarefa::all();
    }

    /**
     * @OA\Get(
     *      path="/api/tarefas/edit/{id}",
     *      @OA\Response(
     *          response=200,
     *          description="Tarefa edited successfully!",
     *      ),
     *     @OA\PathItem (
     *     ),
     * )
     */
    public function update(EditTarefaRequest $request, int $id): JsonResponse
    {
        $tarefa = Tarefa::find($id);
        if(!$tarefa) {
            return response()->json(['message' => 'Não existe essa tarefa.'], 500);
        }
        
        $tarefa->update($request->except('_token'));
        return response()->json(['message' => 'Tarefa is created!', 'data' => $tarefa ], 200);
    }

   /**
     * @OA\Get(
     *      path="/api/tarefas",
     *      @OA\Response(
     *          response=200,
     *          description="Tarefas returned successfully!",
     *      ),
     *     @OA\PathItem (
     *     ),
     * )
     */
    public function delete($id)
    {
        $tarefa = Tarefa::find($id);
        if(!$tarefa) {
            return response()->json(['message' => 'Não existe essa tarefa.'], 500);
        }

        $tarefa->delete();
        return response()->json(['message'=> 'Tarefa apagada com sucesso.'], 200);
    }
}
