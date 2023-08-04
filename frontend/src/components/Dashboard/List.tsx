import { useSelector } from "react-redux";
import Departamentos from "../../pages/Departamentos";
import ListComponents from "./List/index";

const List = () => {
    const listName = useSelector((store: any) => store.dashboard.listName);
    return <> 
    list {listName} 
    <ListComponents.Table />
    </>;
};
export default List;