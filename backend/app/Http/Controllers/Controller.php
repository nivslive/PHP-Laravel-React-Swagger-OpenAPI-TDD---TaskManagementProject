<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use OpenApi\Annotations as OA;

/**
 * @OA\Info(
 *     title="Task Management API",
 *     version="0.1",
 *      @OA\Contact(
 *          email="nivsoficial@gmail.com"
 *      ),
 * ),
 *  @OA\Server(
 *      description="Tarefas",
 *      url="https://localhost:8000/api/tarefas"
 *  ),
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
