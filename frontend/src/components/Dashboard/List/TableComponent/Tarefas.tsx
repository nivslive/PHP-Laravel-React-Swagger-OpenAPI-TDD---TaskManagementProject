import { useSelector } from "react-redux";
import TableComponents from "./index";
const Tarefas = () => {
    let list = useSelector((state: any) => state.dashboard.principalList);
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
                <td>{e.title}</td>
                <td>
                    <TableComponents.DeleteButton dbId={e.id} stateKey={k} />
                    <TableComponents.EditButton id={k}/>
                </td>
                </tr>
            </tbody>

           </>
           )
        })
    }
    </table>
</>)};

export default Tarefas;