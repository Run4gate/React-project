import { useSelector } from "react-redux";
import { isAuth as auth } from "./selectors";
import { Navigate, Outlet } from "react-router";
import { PATHS } from "./constants";

export const ProtectedRoutes = () => {
    const isAuth = useSelector(auth)
    return isAuth ? <Outlet/> : <Navigate to={PATHS.SIGNUP} replace/>
}