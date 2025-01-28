import { 
    BrowserRouter, 
    Routes, 
    Route,
    Navigate } from 'react-router';
import { Layout } from "./Layout";
import { PATHS } from "src/utils/constants";
import { publicRoutes } from "src/routes";

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    { publicRoutes.map(
                        ({path, Component}) => 
                            <Route key={path} path={path} element={<Component/>}/>
                        )
                    }
                    <Route path="*" element={<Navigate to={PATHS.HOME}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}