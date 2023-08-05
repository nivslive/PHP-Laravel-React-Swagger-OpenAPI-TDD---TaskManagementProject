import { FuncionarioState } from "../store/interfaces";
import Fetch from "./Fetch";
import { IDepartamento } from "./Interfaces";

class Departamento extends Fetch implements IDepartamento {
    path: string;
    constructor(path: string) {
        super(path);
        this.path = path;
    }
    // get() {
    //     throw new Error("Method not implemented.");
    // }
    async update(id: string, content: any) {
        return await this.put(id, content);
    }
    show() {
        throw new Error("Method not implemented.");
    }
    // delete() {
    //     throw new Error("Method not implemented.");
    // }
    async  all() {
        return await this.get('/all');
    }


}

const departamentoData = new Departamento('/departamentos');
export default departamentoData;