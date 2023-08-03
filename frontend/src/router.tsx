import {createBrowserRouter} from "react-router-dom";
import publicRoutes from "./routes/public";
import authRoutes from "./routes/auth";

const allRoutes = [...publicRoutes, ...authRoutes];
const auth = true;
const router = createBrowserRouter(auth ? allRoutes : publicRoutes);
export default router;