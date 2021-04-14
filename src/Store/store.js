import create from "zustand";
import { devtools, redux } from "zustand/middleware";

let initState = { user: { token: ''}, book:[]};

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const GET_USER = "GET_USER"


const reducer = (state, action) => {
    switch (action.type){
        case LOGIN:
            return{ user: action.payload };
        case LOGOUT:
            return { user: {} };
        case GET_USER:
            return{ ...state, user:action.payload }        
    }
};

export const useStore = create(devtools(redux(reducer, initState)), { name: "storage"})