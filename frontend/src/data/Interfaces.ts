interface IData {
    path: string;
}
interface IFuncionario extends IData {
    all(): any;
    get(): any;
    show(): any;
    delete(): any;
}

interface ITarefa extends IData {
    all(): any;
    get(): any;
    show(): any;
    delete(): any;
}

interface IDepartamento extends IData {
    all(): any;
    get(): any;
    show(): any;
    delete(): any;
}


export type {IFuncionario, ITarefa, IDepartamento};