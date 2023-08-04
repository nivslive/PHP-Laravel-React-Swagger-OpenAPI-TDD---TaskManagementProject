import { useSelector } from "react-redux";
interface Departamento {
    nome: string;
}
interface IDepartamentos {
    data: Departamento[] | undefined;
}

const Departamentos = (props: IDepartamentos | undefined) => {
    if(props === undefined) return <></>;
    if(props.data === undefined) return <>Não foi possível carregar os dados</>;

    return (<>
    {   props.data.map((e) => {
           return(
           <>
           <table>
                <tr>{e.nome}</tr>
                <tr>oi</tr>
                <td>oi</td>
                <td>oi</td>
            </table>
           </>)
        })
    }

</>)};

export default Departamentos;