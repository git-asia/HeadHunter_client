import { useContext, useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { ReservedStudent, StudentProps, UpdateAction } from 'types';

import { API_URL } from '../../config/apiUrl';
import { FilterContext } from '../../contexts/filter.context';
import { PaginationContext } from '../../contexts/pagination.context';
import { filterQuery } from '../utils/filterQuery';
import { fragmentValues } from '../utils/fragmentValues';

import { UserDataFragment } from './UserDataFragment/UserDataFragment';

import './UserData.scss';

type StudentResults = { allRecords: number; data: ReservedStudent[] };

export const UserData = () => {
    const { filterCon } = useContext(FilterContext);
    const [studentData, setStudentData] = useState<StudentProps[]>([]);
    const { pagination, setPagination } = useContext(PaginationContext);

    const hrId = localStorage.getItem('userid');

    const changeStatus = async (studentId: string, index: number) => {
        try {
            const res = await fetch(`${API_URL}/student/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: UpdateAction.reserve,
                    studentId,
                    hrId,
                }),
            });
            const data = await res.json();
            console.log(data.message);
        } finally {
            setStudentData((studentData) => {
                return studentData.filter((_, i) => i !== index);
            });
        }
    };

    const isOpen = (index: number) => {
        setStudentData((studentData) => {
            return studentData.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        open: !item.open,
                    };
                } else {
                    return item;
                }
            });
        });
    };

    useEffect(() => {
        const filtersParams = new URLSearchParams(filterQuery(filterCon,pagination));

        (async () => {
            const res = await fetch(`${API_URL}/student/all?${filtersParams}`, {
                method: 'GET',
            });
            const { data,allRecords }: StudentResults = await res.json();

            const student = fragmentValues(data);
            setStudentData(student);

            setPagination({
                ...pagination,
                allRecords: Number(allRecords),
            });
        })();
    }, [pagination.page, filterCon]);

    return (
        <>
            {studentData &&
        studentData.map((item, index) => (
            <div className="user-data__container" key={index}>
                <div className="user-data__nav">
                    <h4>{item.name}</h4>
                    <div className="input-container">
                        <input type="button" value="Zarezerwuj rozmowę" onClick={() => changeStatus(item.id, index)} />
                        <IoIosArrowDown
                            size={30}
                            fill="#666666"
                            className={`${item.open && 'user-data__nav__svg--rotate'}`}
                            onClick={() => {
                                isOpen(index);
                            }}
                        />
                    </div>
                </div>
                {item.open && (
                    <div className="user-data__fragments">
                        {item.fragmentsValues.map(({ header, value }, id) => {
                            return <UserDataFragment header={header} value={value} key={id} />;
                        })}
                    </div>
                )}
                <div className="test" />
            </div>
        ))}
        </>
    );
};
