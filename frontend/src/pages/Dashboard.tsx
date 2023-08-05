import { useDispatch, useSelector } from "react-redux";
import DashboardComponents from "../components/Dashboard/index";
import { dashboardActions } from "../store/dashboard-slice";
import tarefaData from "../data/Tarefa";
import { useEffect, useState } from "react";
import ErrorPage from "./Error";

const Dashboard = () => {
    const selector = useSelector((state: any) => state);
    const dispatch = useDispatch();
    function boot() {
        dispatch(dashboardActions.changeList({listName:'tarefas'}));
        tarefaData.all().then((response) => {
            if (response.status === 200) {
                return response.json(); 
            } else {
                throw new Error("Erro na requisição"); 
            }
        }).then((data) => {
            dispatch(dashboardActions.setListData({listName: selector.dashboard.listName, data}));
        }).catch((error) => {
        });
    }
    
    const [unmountBoot, setUnmountBoot] = useState(false);
    useEffect(() => {
        !(unmountBoot) && boot();
        setUnmountBoot(true);
    }, [unmountBoot]);

    if(selector.error.showErrorHandlerForDBReason) {
        return (<>
            <ErrorPage typeError="db"/>
        </>);
    }

    return (<> 
        <div className={`d-flex p-3`}>
            <DashboardComponents.Buttons/>
            <DashboardComponents.Search/>
        </div>
        {selector.iCanSeeEditModal && <DashboardComponents.EditModal />}
        <DashboardComponents.List/>
    </>)
};
export default Dashboard;