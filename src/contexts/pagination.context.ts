import {createContext} from "react";

export const PaginationContext = createContext({
    pagination: {page: 0, rowsPerPage:10, allRecords:0},
    setPagination: (s: any) => {s},
})