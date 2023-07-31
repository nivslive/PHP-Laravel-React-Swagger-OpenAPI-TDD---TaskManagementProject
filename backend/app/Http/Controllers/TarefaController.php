<?php

namespace App\Http\Controllers;

use App\Http\Requests\{StoreTarefaRequest, EditTarefaRequest, UpdateTarefaRequest};
use App\Models\Tarefa;

class TarefaController extends Controller
{
    /**
     * @OA\Get(
     *      path="/profiles",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *      ),
     *     @OA\PathItem (
     *     ),
     * )
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTarefaRequest $request)
    {
        return Tarefa::create($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Tarefa $tarefa)
    {
        return $tarefa;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EditTarefaRequest $request, Tarefa $tarefa)
    {
        $tarefa->edit($request->all());
        $tarefa->save();
        return response()->json($tarefa);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTarefaRequest $request, Tarefa $tarefa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tarefa $tarefa)
    {
        //
    }
}
