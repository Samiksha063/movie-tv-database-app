import {create} from "zustand";

type User ={
    email: string;
    password: string;
    username: string;
};

const savedUser : User | null = JSON.parse(localStorage.getItem("loggedInUser") || "null");

type AuthStore = {
    user: User | null;
    register: (email: string, password: string, username: string) => boolean;
    login: (email: string, password: string, rememberMe: boolean) => string;
}

export const useAuthStore = create<AuthStore>((set)=>({
    user: savedUser,
    register: (email,password, username) => {
        //getting existing users from local storage
        const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

        //checkng for duplicate emails
        const emailExists = users.some(user => user.email === email);
        if(emailExists){
            return false;
        }

        //adding new user
        const newUser: User = {email, password, username};
        users.push(newUser);

        localStorage.setItem("users",JSON.stringify(users));

        return true;

    },

    login: (email, password, rememberMe) => {
        //getting user from localstorage
        const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

        const user = users.find(u=> u.email === email);
        
        if(!user){
            return "not-registered";
        }

        if(user.password !== password){
            return "wrong-password";
        }

        set({user});

        if(rememberMe){
            localStorage.setItem("loggedInUser",JSON.stringify(user));
        }

        return "success";
    }
}));