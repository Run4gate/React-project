import { FC } from "react";
import { HomePage } from "./pages/HomePage";
import { PATHS } from "./utils/constants";

export const publicRoutes: {path: string, Component: FC}[] = [
    {
        path: PATHS.HOME,
        Component: HomePage
    }
]