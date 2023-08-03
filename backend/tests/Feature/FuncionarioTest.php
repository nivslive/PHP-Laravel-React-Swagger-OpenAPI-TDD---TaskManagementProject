<?php

namespace Tests\Feature;

use App\Models\Departamento;
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

        $departamento = Departamento::factory()->create();
        
        $response = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->post('/funcionarios', [
                'first_name' => 'nome', 
                'last_name' => 'sobrenome', 
                'phone' => '119748844',
                'email' => 'test@test.com',
                'department_id' => $departamento->id
            ]);

        $response->assertStatus(200);

    }

    public function test_i_can_show() : void {
        $user = \App\Models\User::factory()->create();
        $token = auth()->attempt(['email' => $user->email, 'password' => 'password']);

        $departamento = Departamento::factory()->create();
        
        $createResponse = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->post('/funcionarios', [
                'first_name' => 'nome', 
                'last_name' => 'sobrenome', 
                'phone' => '119748844',
                'email' => 'testsss@test.com',
                'department_id' => $departamento->id
        ]);
        $data = json_decode($createResponse->getContent())->data;

        $response = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->get("/funcionarios/{$data->id}");
        $finalData = json_decode($response->getContent())->data;

        $this->assertEquals($finalData->first_name, 'nome');
        $response->assertStatus(200);
    }

    public function test_i_can_edit(): void {
        $user = \App\Models\User::factory()->create();
        $token = auth()->attempt(['email' => $user->email, 'password' => 'password']);

        $departamento = Departamento::factory()->create();
        
        $createResponse = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->post('/funcionarios', [
                'first_name' => 'nome', 
                'last_name' => 'sobrenome', 
                'phone' => '119748844',
                'email' => 'tests@test.com',
                'department_id' => $departamento->id
        ]);
        $data = json_decode($createResponse->getContent())->data;

        $response = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->put("/funcionarios/{$data->id}", 
            [
                'first_name' => 'test', 
                'last_name' => 'test', 
                'phone' => '119748845',
                'email' => 'testando@teste.com',
                'department_id' => $departamento->id
            ]
        );
        $finalData = json_decode($response->getContent())->data;

        $this->assertEquals($finalData->first_name, 'test');
        $response->assertStatus(200);

    }
    public function test_i_can_delete() : void {
        $user = \App\Models\User::factory()->create();
        $token = auth()->attempt(['email' => $user->email, 'password' => 'password']);

        $departamento = Departamento::factory()->create();
        
        $createResponse = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->post('/funcionarios', [
                'first_name' => 'nome', 
                'last_name' => 'sobrenome', 
                'phone' => '119748844',
                'email' => 'tests@test.com',
                'department_id' => $departamento->id
        ]);
        $data = json_decode($createResponse->getContent())->data;

        $response = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->delete("/funcionarios/{$data->id}");
        $response->assertStatus(200);
    }


}
