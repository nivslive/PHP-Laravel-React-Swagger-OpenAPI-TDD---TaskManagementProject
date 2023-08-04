import { FuncionarioState, TarefaState } from "../store/interfaces";
import Fetch from "./Fetch";
import { ITarefa } from "./Interfaces";

class Tarefas extends Fetch implements ITarefa {
    path: string;
    constructor(path: string) {
        super(path);
        this.path = path;
    }
    show() {
        throw new Error("Method not implemented.");
    }
    // get() {
    //     throw new Error("Method not implemented.");
    // }
    // show() {
    //     throw new Error("Method not implemented.");
    // }
    // delete() {
    //     throw new Error("Method not implemented.");
    // }

    async  all() {
        return await this.get('/all');
    }

}

const tarefaData = new Tarefas('/tarefas');
export default tarefaData;