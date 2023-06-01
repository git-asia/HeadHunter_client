import { FilterCon, Pagination } from 'types';

export const filterQuery = (data:FilterCon,pagination:Pagination):URLSearchParams =>{

    const hrId:string|null = localStorage.getItem('userid');
    data.expectedSalary.min = data.expectedSalary.min === '' ? '0' : data.expectedSalary.min;
    data.expectedSalary.max = data.expectedSalary.max === '' ? '999999' : data.expectedSalary.max;
    const { expectedContractType, expectedSalary, expectedTypeWork, ...updateFilter } = data;

    const filter = {
        ...updateFilter,
        ...expectedContractType,
        ...expectedSalary,
        ...expectedTypeWork,
        page: pagination.page,
        rowsPerPage: pagination.rowsPerPage,
        hrId,
    }
    const convertedFilter: Record<string, string> = Object.fromEntries(
        Object.entries(filter).map(([key, value]) => [key, String(value)])
    );

    return (new URLSearchParams(convertedFilter));
}