import create from "zustand";
import { devtools, redux } from "zustand/middleware";

let initState = { user: { token: ''}, book:[]}