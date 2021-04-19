import create from "zustand";
import { devtools, redux } from "zustand/middleware";

const initState = {
  user: JSON.parse(localStorage.getItem("user")) || {
    token: "",
    email: "",
    firstName: "",
    lastName: "",
    creditBalance: 50.0,
  },
  book: [
    {
      title: "",
      subtitle: "",
      author: "",
      category: "",
      tags: "",
      imageURL: "",
      purchasePrice: 0,
      rentPrice: 0,
      sellPrice: 0,
      inventory: 0,
      description: "",
    },
  ],
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_USER = "GET_USER";
export const FIRSTNAME = "FIRSTNAME";
export const LASTNAME = "LASTNAME";
export const CREDITBALANCE = "CREDITBALANCE";
export const UPDATEUSER = "UPDATEUSER";
export const SIGNUP = "SIGNUP";

export const ADDBOOK = "ADDBOOK";
export const REMOVEBOOK = "REMOVEBOOK";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      localStorage.removeItem("user");
      return { user: {} };
    case GET_USER:
      return { ...state, user: action.payload };
    case SIGNUP:
      return { user: action.payload };
    case FIRSTNAME:
      return { ...state, user: action.payload };
    case LASTNAME:
      return { ...state, user: action.payload };
    case CREDITBALANCE:
      return { ...state, user: action.payload };
    case UPDATEUSER:
      return { ...state, user: { ...state.user, user: action.payload } };
    case ADDBOOK:
      return { ...state, book: action.payload };
    case REMOVEBOOK:
      return { ...state, book: action.payload };
    default:
      return state;
  }
};

export const useStore = create(devtools(redux(reducer, initState)), {
  name: "storage",
});
