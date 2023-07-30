<?php

namespace Tests\Feature;

use App\Http\Requests\EditTarefaRequest;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TarefaTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testEditIsSuccessful()
    {
        $request = new EditTarefaRequest();
        $request->set('titulo', 'New Title');
        $request->set('descricao', 'New Description');
        $response = $this->call('POST', '/api/tarefas/1', $request->all());
        $response->assertOk();
        $this->assertTrue($response->json('success'));
    }
}
