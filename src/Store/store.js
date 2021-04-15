import create from "zustand";
import { devtools, redux } from "zustand/middleware";

const initState = { user: {token: '', email:''}, book:[] };
// firstName: '',lastName: '',email:'', creditBalance: 50.00
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const GET_USER = "GET_USER"
export const FIRSTNAME = "FIRSTNAME"
export const LASTNAME = "LASTNAME"
export const CREDITBALANCE = "CREDITBALANCE"
export const UPDATEUSER = "UPDATEUSER"


const reducer = (state, action) => {
    switch (action.type){
        case LOGIN:
            return{ user: action.payload };
        case LOGOUT:
            return { user: {} };
        case GET_USER:
            return{ ...state, user: action.payload };  
        case  FIRSTNAME:
            return {...state, user: action.payload };
        case  LASTNAME:
            return {...state, user: action.payload };
        case  CREDITBALANCE:
            return {...state, user: action.payload }; 
        case UPDATEUSER:
            return{...state, user: action.payload};
            default:
      return state;      
    }
};

export const useStore = create(devtools(redux(reducer, initState)), { name: "storage"})