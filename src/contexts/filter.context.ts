import { createContext } from 'react';

import { initialStateFilter } from '../components/utils/initialState.filter';

export const FilterContext = createContext({
    filterCon: initialStateFilter,
    setFilterCon: (s: any) => {s},
})