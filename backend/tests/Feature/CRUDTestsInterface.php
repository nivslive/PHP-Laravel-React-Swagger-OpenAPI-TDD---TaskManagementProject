<?php
namespace Tests\Feature;
interface CRUDTestsInterface {

    public function test_i_can_create(): void;
    public function test_i_can_show(): void;
    public function test_i_can_edit(): void;
    public function test_i_can_delete(): void;
}