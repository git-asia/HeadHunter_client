import React, {useContext} from "react";
import TablePagination from '@mui/material/TablePagination';
import {PageContext} from "../../contexts/page.context";
import {RowsPerPage} from "../../contexts/rowsPerPage.context";

import "./Pagination.scss";

export const Pagination = () => {
    const {page, setPage} = useContext(PageContext);
    const {rowsPerPage, setRowsPerPage} = useContext(RowsPerPage);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
         <div className="pagination-wrapper">
            <TablePagination

                className="custom-pagination"
                component="div"
                count={100}  //TODO 100 trzeba zamienić na zmienną z ilościa wszystkich rekordów
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage={<span className="text">Ilość elementów </span>}
                rowsPerPageOptions={[10, 25, 40]}
                labelDisplayedRows={({ page }) => {
                    if(((page+1) *rowsPerPage) > 100)                           //TODO 100 trzeba zamienić na zmienną z ilościa wszystkich rekordów
                        return (<span className="text">100 z 100</span>) //TODO 100 trzeba zamienić na zmienną z ilościa wszystkich rekordów
                    else
                        return (<span className="text">{(page+1) *rowsPerPage} z 100</span>);  //TODO 100 trzeba zamienić na zmienną z ilościa  wszystkich rekordów
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