import { FuncionarioState } from "../store/interfaces";
import { IFuncionario } from "./Interfaces";
import Fetch from './Fetch';
class Funcionario extends Fetch {
    path: string;
    constructor(path: string) {
        super(path);
        this.path = path;
    }
    
    async update(id: string, content: any) {
        return await this.put(id, content);
    }

    delete(id: any): any {
        return this.delete(`/${id}`);
    }

    async  all() {
        return await this.get('/all');
    }


}

const funcionarioData = new Funcionario('/funcionarios');
export default funcionarioData;