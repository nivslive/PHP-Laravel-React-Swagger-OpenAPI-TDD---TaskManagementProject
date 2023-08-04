import { FuncionarioState } from "../store/interfaces";
import { IFuncionario } from "./Interfaces";
import Fetch from './Fetch';
class Funcionario extends Fetch {
    path: string;
    constructor(path: string) {
        super(path);
        this.path = path;
    }
    get(): any {
        return this.get();
    }
    update(data: any) {
        return this.put('', data);
    }

    delete(id: any): any {
        return this.delete(`/${id}`);
    }

    all(): FuncionarioState[] | [] {
        throw new Error("Method not implemented.")
    }


}

const funcionarioData = new Funcionario('/funcionarios');
export default funcionarioData;