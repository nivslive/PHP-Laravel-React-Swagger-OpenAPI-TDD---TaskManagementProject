<?php

namespace Tests\Feature;

use Tests\Feature\CRUDTestsInterface;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FuncionarioTest extends TestCase implements CRUDTestsInterface
{
    /**
     * A basic feature test example.
     */

     public function test_i_can_create(): void  {
        $user = \App\Models\User::factory()->create();
        $token = auth()->attempt(['email' => $user->email, 'password' => 'password']);

        $funcionario = Funcionario::factory()->create();
        $response = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->post('/tarefas', ['title' => 'test', 'description' => 'test', 'assignee_id' => $funcionario->id]);
        $response->assertStatus(200);

    }

    public function test_i_can_show() : void {
        $user = \App\Models\User::factory()->create();
        $token = auth()->attempt(['email' => $user->email, 'password' => 'password']);

        $funcionario = Funcionario::factory()->create();
        
        $createResponse = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->post('/tarefas', ['title' => 'testando', 'description' => 'test', 'assignee_id' => $funcionario->id]);

        $data = json_decode($createResponse->getContent())->data;

        $response = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->get("/tarefas/{$data->id}", ['title' => 'testando', 'description' => 'test', 'assignee_id' => $funcionario->id]);
        
        $finalData = json_decode($createResponse->getContent())->data;

        $this->assertEquals($finalData->title, 'testando');

        $response->assertStatus(200);
    }

    public function test_i_can_edit(): void {
        $user = \App\Models\User::factory()->create();
        $token = auth()->attempt(['email' => $user->email, 'password' => 'password']);

        $funcionario = Funcionario::factory()->create();
        
        $createResponse = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->post('/tarefas', ['title' => 'teste', 'description' => 'test', 'assignee_id' => $funcionario->id]);

        $data = json_decode($createResponse->getContent())->data;

        $response = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->put("/tarefas/{$data->id}", ['title' => 'testando', 'description' => 'test']);
        $finalData = json_decode($response->getContent())->data;

        $this->assertEquals($finalData->title, 'testando');

        $response->assertStatus(200);
    }
    public function test_i_can_delete() : void {
        $user = \App\Models\User::factory()->create();
        $token = auth()->attempt(['email' => $user->email, 'password' => 'password']);

        $funcionario = Funcionario::factory()->create();
        
        $createResponse = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->post('/tarefas', ['title' => 'teste', 'description' => 'test', 'assignee_id' => $funcionario->id]);

        $data = json_decode($createResponse->getContent())->data;

        $response = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->delete("/tarefas/{$data->id}");

        $response->assertStatus(200);
    }


}
