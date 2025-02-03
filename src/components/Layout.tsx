import { Outlet } from "react-router";
import { Header } from "./Header";
import { useAuthWatcher } from "../hooks/useAuthWatcher";

export function Layout() {
    useAuthWatcher()
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}