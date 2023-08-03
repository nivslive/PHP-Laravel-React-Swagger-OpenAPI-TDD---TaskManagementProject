<?php

namespace Tests\Feature;

use App\Models\Departamento;
use Tests\Feature\CRUDTestsInterface;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DepartamentoTest extends TestCase implements CRUDTestsInterface
{
    /**
     * A basic feature test example.
     */

     public function test_i_can_create(): void  {
        $user = \App\Models\User::factory()->create();
        $token = auth()->attempt(['email' => $user->email, 'password' => 'password']);


        $response = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->post('/departamentos', [
                'name' => 'test', 
            ]);

        $response->assertStatus(200);

    }

    public function test_i_can_show() : void {
        $user = \App\Models\User::factory()->create();
        $token = auth()->attempt(['email' => $user->email, 'password' => 'password']);
        $createResponse = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->post('/departamentos', [
                'name' => 'test', 
        ]);
        $data = json_decode($createResponse->getContent())->data;

        $response = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->get("/departamentos/{$data->id}");
        $finalData = json_decode($response->getContent())->data;

        $this->assertEquals($finalData->name, 'test');
        $response->assertStatus(200);
    }

    public function test_i_can_edit(): void {
        $user = \App\Models\User::factory()->create();
        $token = auth()->attempt(['email' => $user->email, 'password' => 'password']);

        
        $createResponse = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->post('/departamentos', [
                'name' => 'testing', 
        ]);
        $data = json_decode($createResponse->getContent())->data;

        $response = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->put("/departamentos/{$data->id}", 
            [
                'name' => 'test', 
            ]
        );
        $finalData = json_decode($response->getContent())->data;

        $this->assertEquals($finalData->name, 'test');
        $response->assertStatus(200);

    }
    public function test_i_can_delete() : void {
        $user = \App\Models\User::factory()->create();
        $token = auth()->attempt(['email' => $user->email, 'password' => 'password']);


        $createResponse = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->post('/departamentos', [
                'name' => 'test', 
        ]);
        $data = json_decode($createResponse->getContent())->data;

        $response = $this->withHeaders(['Authorization' => 'Bearer ' . $token])
            ->delete("/departamentos/{$data->id}");
        $response->assertStatus(200);
    }


}
