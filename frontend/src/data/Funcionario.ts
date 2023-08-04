import { FuncionarioState } from "../store/interfaces";
import { IFuncionario } from "./Interfaces";
import Fetch from './Fetch';
class Funcionario extends Fetch {
    path: string;
    constructor(path: string) {
        super(path);
        this.path = path;
    }
    
    update(data: any) {
        return this.put('', data);
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