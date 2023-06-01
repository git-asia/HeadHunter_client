import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { ReservedStudent, StudentProps } from 'types';

import logo from '../../assets/images/avatar-holder.png';
import { API_URL } from '../../config/apiUrl';
import { FilterContext } from '../../contexts/filter.context';
import { PaginationContext } from '../../contexts/pagination.context';
import { UserDataFragment } from '../UserData/UserDataFragment/UserDataFragment';
import { filterQuery } from '../utils/filterQuery';
import { fragmentValues } from '../utils/fragmentValues';

import './ReservedUserData.scss';

type StudentResults = { allRecords: number; data: ReservedStudent[] };

export const ReservedUserData = () => {

    const navigate = useNavigate();
    const hrId = localStorage.getItem('userid');

    const { filterCon } = useContext(FilterContext);
    const [studentData, setStudentData] = useState<StudentProps[]>([]);
    const { pagination, setPagination } = useContext(PaginationContext);

    const changeStatus = async (studentId: string, index: number, action: string) => {
        try {
            const res = await fetch(`${API_URL}/student/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action,
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
            const res = await fetch(`${API_URL}/student/reserved?${filtersParams}`, {
                method: 'GET',
            });
            const { data, allRecords }: StudentResults = await res.json();
            const student = fragmentValues(data);
            setStudentData(student);
            setPagination({
                ...pagination,
                allRecords: Number(allRecords),
            });
        })();

        if (!hrId){
            navigate('/');
        }
    }, [pagination.page, filterCon]);

    const formatDate = (reservationEndDate: string|null|undefined) => {
        if (reservationEndDate){
            const to = new Date(reservationEndDate);
            return `${to.getDate()}.${to.getMonth()+1}.${to.getFullYear()} r.`
        }
        return ''
    }

    const showCv = (id:string) => {
        navigate(`/cv/${id}`)
    }

    return (
        <>
            {studentData &&
        studentData.map((item, index) => (
            <div className="user-data__container" key={index}>
                <div className="user-data__nav">
                    <div className='date-and-img'>
                        <div className="reservation-date">
                            <p>Rezerwacja do: </p>
                            <p className='bold'>{formatDate(item.reservationExpiresOn)}</p>
                        </div>
                        <img src={item.githubUsername ? `https://github.com/${item.githubUsername}.png` : logo} alt="user logo" />
                    </div>
                    <h4>{item.name}</h4>
                    <div className="input-container">
                        <input
                            type="button"
                            value="Pokaż CV"
                            onClick={() => showCv(item.id)}
                        />
                        <input
                            type="button"
                            value="Brak zainteresowania"
                            onClick={() => changeStatus(item.id, index, 'disinterest')}
                        />
                        <input type="button" value="Zatrudniony" onClick={() => changeStatus(item.id, index, 'employ')} />
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
