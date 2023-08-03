import Dashboard from "../pages/Dashboard";
import Departamentos from "../pages/Departamentos";
import Funcionarios from "../pages/Funcionarios";
import Tarefas from "../pages/Tarefas";

const authRoutes = [
    {
        path: "/dashboard",
        element: <Dashboard/>,
    },
    {
        path: "/departamentos",
        element: <Departamentos/>,
    },
    {
        path: "/tarefas",
        element: <Tarefas/>,
    },
    {
        path: "/funcionarios",
        element: <Funcionarios/>,
    },
];

export default authRoutes;