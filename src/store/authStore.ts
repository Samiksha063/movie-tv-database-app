import {create} from "zustand";

type User ={
    email: string;
    password: string;
    username: string;
};

type AuthStore = {
    user: User | null;
    register: (email: string, password: string, username: string) => boolean;
    login: (email: string, password: string) => string;
}

export const useAuthStore = create<AuthStore>((set)=>({
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

    },

    login: (email, password) => {
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
        return "success";
    }
}));