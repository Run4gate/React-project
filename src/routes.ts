import { FC } from "react";
import { HomePage } from "./pages/HomePage";
import { PATHS } from "./utils/constants";
import { SearchPage } from "./pages/SearchPage";
import { CharacterPage } from "./pages/CharacterPage";
import { SignInPage, SignUpPage } from "./pages/AuthPages/AuthPages";

export const publicRoutes: {path: string, Component: FC<any>}[] = [
    {
        path: PATHS.HOME,
        Component: HomePage
    },
    {
        path: PATHS.SEARCH,
        Component: SearchPage
    },
    {
        path: PATHS.CHARACTER,
        Component: CharacterPage
    },
    { 
        path: PATHS.SIGNUP, 
        Component: SignUpPage 
    },
    { 
        path: PATHS.SIGNIN, 
        Component: SignInPage 
    },
]

