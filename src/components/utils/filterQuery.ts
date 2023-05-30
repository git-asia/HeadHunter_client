
export const filterQuery = (data:any,pagination:any) =>{

    const hrId = localStorage.getItem('userid');
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

    return (new URLSearchParams(filter));
}