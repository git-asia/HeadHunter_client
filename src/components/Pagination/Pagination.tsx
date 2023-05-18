import React, {useContext} from "react";
import TablePagination from '@mui/material/TablePagination';


import "./Pagination.scss";
import {PaginationContext} from "../../contexts/pagination.context";

export const Pagination = () => {
    const {pagination, setPagination} = useContext(PaginationContext)

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPagination({
            ...pagination,
            page: newPage
        })
        console.log(pagination);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setPagination({
            ...pagination,
            page: 0,
            rowsPerPage: parseInt(event.target.value, 10),
        })
    };
    return (
         <div className="pagination-wrapper">
            <TablePagination

                className="custom-pagination"
                component="div"
                count={pagination.allRecords}
                page={pagination.page}
                onPageChange={handleChangePage}
                rowsPerPage={pagination.rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage={<span className="text">Ilość elementów </span>}
                rowsPerPageOptions={[10, 25, 40]}
                labelDisplayedRows={({ page }) => {
                    if(((page+1) *pagination.rowsPerPage) > pagination.allRecords)
                        return (<span className="text">{pagination.allRecords} z {pagination.allRecords}</span>)
                    else
                        return (<span className="text">{(page+1) *pagination.rowsPerPage} z {pagination.allRecords}</span>);
                }}

                backIconButtonProps={{
                    className: "icon-arrow icon-arrow-margin",
                    title: "Poprzednia strona"
                }}
                nextIconButtonProps={{
                    className: "icon-arrow",
                    title: "Następna strona"
                }}

               />
         </div>
    );
};