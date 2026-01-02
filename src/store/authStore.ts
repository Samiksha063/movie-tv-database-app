import {create} from "zustand";

type User ={
    email: string;
    password: string;
    username: string;
};

type AuthStore = {
    user: User | null;
    register: (email: string, password: string, username: string) => boolean;
}

export const useAuthStore = create<AuthStore>(()=>({
    user: null,
    register: (email,password, username) => {
        //getting existing users from local storage
        const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

        //checkng for duplicate emails
        const emailExits = users.some(user => user.email === email);
        if(emailExits){
            return false;
        }

        //adding new user
        const newUser: User = {email, password, username};
        users.push(newUser);

        localStorage.setItem("users",JSON.stringify(users));

        return true;

    }
}));