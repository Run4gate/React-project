import { TypeFilters } from "../http/characterTypes";

export type User = {
    username: string;
    password: string;
};


export const loadUsersFromLocalStorage = (): User[] => {
    return JSON.parse(localStorage.getItem("users") || "[]");
};


export const loadLoginUser = (): User | null => {
    return JSON.parse(localStorage.getItem("loginUser") || "null");
};


export const saveLoginUserToLocalStorage = (user: User) => {
    const existingUser = localStorage.getItem("loginUser")
    if(!existingUser) {
        localStorage.setItem("loginUser", JSON.stringify(user));
    }
};

export const saveUsersToLocalStorage = (users: User[]) => {
    localStorage.setItem("users", JSON.stringify(users));
};

export const removeItemFromLocalStorage = (item: string) => {
    localStorage.removeItem(item);
};

export const saveSearchConfigToLocalStorage = (searchConfig: TypeFilters[]) => {
    localStorage.setItem("searchHistory", JSON.stringify(searchConfig))
}

export const loadSearchConfigFromLocalStorage = (): TypeFilters[] => {
    return JSON.parse(localStorage.getItem("searchHistory") || "[]");
}