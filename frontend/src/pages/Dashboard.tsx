import { useSelector } from "react-redux";
import DashboardComponents from "../components/Dashboard/index";

const Dashboard = () => {
    const selector = useSelector((state: any) => state.dashboard);
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