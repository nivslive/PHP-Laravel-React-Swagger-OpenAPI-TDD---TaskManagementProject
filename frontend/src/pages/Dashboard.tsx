import { useEffect } from "react";
import DashboardComponents from "../components/Dashboard/index";
import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "../store/dashboard-slice";
import tarefaData from "../data/Tarefa";

const Dashboard = () => {
    return (<> 
        <div className={`d-flex p-3`}>
            <DashboardComponents.Buttons/>
            <DashboardComponents.Search/>
        </div>

        <DashboardComponents.List/>
    </>)
};
export default Dashboard;