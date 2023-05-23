import { createContext } from 'react';

const initialState = {
    expectedTypeWork: {
        remoteWork: false,
        inOffice: false,
    },
    expectedContractType: {
        employmentContract: false,
        b2b: false,
        mandateContract: false,
        workContract: false,
    },
    expectedSalary: {
        min: '',
        max: '',
    },
    canTakeApprenticeship: null,
    monthsOfCommercialExp: '0',
    courseCompletion: 1,
    courseEngagement: 1,
    projectDegree: 1,
    teamProjectDegree: 1,
};

export const FilterContext = createContext({
    filterCon: initialState,
    setFilterCon: (s: any) => {s},
})