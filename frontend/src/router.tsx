import {createBrowserRouter} from "react-router-dom";
import publicRoutes from "./routes/public";
import authRoutes from "./routes/auth";
// import store from "./store";

// const auth = store.getState().auth.authenticated;
const allRoutes = [...publicRoutes, ...authRoutes];
// const auth = true;
const router = createBrowserRouter(allRoutes);
export default router;