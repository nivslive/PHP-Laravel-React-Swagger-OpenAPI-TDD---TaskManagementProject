import { useSelector } from "react-redux";
import TableComponents from "./index";
const Departamentos = () => {
    // let test = [{title: 'test'}, {title: 'testando'}];
    let list = useSelector((state: any) => state.dashboard.principalList);
    if(list === undefined) return <></>;
    return (<>
    <table className="table">
    <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th scope="col">Opções</th>
                </tr>
    </thead>
    {   list.map((e: any, k: number) => {
           return(
           <>
            <tbody key={k}>
                <tr>
                <th scope="row">{k + 1}</th>
                <td>{e.name}</td>
                <td><TableComponents.EditButton id={k}/></td>
                </tr>
            </tbody>

           </>
           )
        })
    }
    </table>
</>)};

export default Departamentos;