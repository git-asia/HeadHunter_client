import {createContext} from "react";

export const RowsPerPage = createContext({
    rowsPerPage: 10,
    setRowsPerPage: (s:number) => {s},
});