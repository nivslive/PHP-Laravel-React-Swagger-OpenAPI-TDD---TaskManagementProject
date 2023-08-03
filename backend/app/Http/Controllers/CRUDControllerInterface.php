<?php

namespace App\Http\Controllers;
use Illuminate\Http\JsonResponse;
use Illuminate\Foundation\Http\FormRequest;
interface CRUDControllerInterface {


    public function create(FormRequest $request): JsonResponse;
    public function find(int $id): JsonResponse;
    public function all(): JsonResponse;
    public function update(FormRequest $request, int $id): JsonResponse;
    public function delete(int $id): JsonResponse;

}