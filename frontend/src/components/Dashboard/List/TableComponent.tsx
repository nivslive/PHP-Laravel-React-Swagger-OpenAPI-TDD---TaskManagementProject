import { useDispatch, useSelector } from "react-redux";
import TableComponents from './TableComponent/index';
const Table = () => {
    const selector = useSelector((store: any) => store.dashboard);
    let table: any;
    let data: any = [];

    return (
        <>
            {selector.listName}
            {/**data === 'fornecedor' && <TableComponents.Funcionarios data={data} />  **/}
            {selector.listName === 'tarefas' && <TableComponents.Tarefas /> }
            {selector.listName === 'departamentos' && <TableComponents.Departamentos data={data} />}
        </>
    )};

export default Table;