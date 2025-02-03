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

export const removeItemFromLocalStorage = (user: string) => {
    localStorage.removeItem(user);
};