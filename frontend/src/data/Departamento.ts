import { FuncionarioState } from "../store/interfaces";
import { IDepartamento } from "./Interfaces";

class Departamento implements IDepartamento {
    path: string;
    constructor(path: string) {
        this.path = path;
    }
    get() {
        throw new Error("Method not implemented.");
    }
    show() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }

    all(): FuncionarioState[] | [] {
        // throw new Error("Method not implemented.")
        return [{name: 'test'}];
    }


}

const departamentoData = new Departamento('/funcionarios');
export default departamentoData;