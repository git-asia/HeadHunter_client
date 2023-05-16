import {createContext} from "react";

export const PageContext = createContext({
    page:0,
    setPage: (s:number) => {s},
})