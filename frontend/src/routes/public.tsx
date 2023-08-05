import { useDispatch, useSelector } from "react-redux";
import Login from "../pages/Login";

const Redirect = () => {
    const auth = useSelector((state: any) => state.auth.authenticated);
    window.location.pathname = auth ? '/dashboard' : '/login';
    return <></>;
};
const publicRoutes = [
    {
        path: "/",
        element: <Redirect />,
    },
    {
        path: "/login",
        element: <Login/>,
    },
];

export default publicRoutes;