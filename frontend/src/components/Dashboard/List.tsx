import { useSelector } from "react-redux";
import ListComponents from "./List/index";

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
const List = () => {
    const listName = useSelector((store: any) => store.dashboard.listName);
    return <> 
    <h1 className="ps-2">{capitalizeFirstLetter(listName)}</h1>
    <ListComponents.Table />
    </>;
};
export default List;