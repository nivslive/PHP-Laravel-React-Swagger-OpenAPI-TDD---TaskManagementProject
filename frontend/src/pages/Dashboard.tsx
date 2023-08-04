import DashboardComponents from "../components/Dashboard/index";

const Dashboard = () => {
    return (<> 
        <div className={`d-flex p-3`}>
            <DashboardComponents.Buttons/>
            <DashboardComponents.Search/>
        </div>
        <DashboardComponents.EditModal />
        <DashboardComponents.List/>
    </>)
};
export default Dashboard;