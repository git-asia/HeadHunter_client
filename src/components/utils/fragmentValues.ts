import { ContractType, Internship, ReservedStudent, StudentProps, TypeWork } from 'types';

export const fragmentValues = (data:ReservedStudent[]) =>{
    const result  = data.map((item) => (
        {
            fragmentsValues: [
                { header: 'Ocena przejścia kursu', value: item.courseCompletion + '/5' },
                { header: 'Ocena aktywności i zaangażowania na kursie', value: item.courseEngagement + '/5' },
                { header: 'Ocena kodu w projekcie własnym', value: item.projectDegree + '/5' },
                { header: 'Ocena pracy w zespole w Scrum', value: item.teamProjectDegree + '/5' },
                { header: 'Preferowane miejsce pracy', value: TypeWork[item.expectedTypeWork] },
                { header: 'Docelowe miasto, gdzie chce pracować kandydat', value: item.targetWorkCity },
                { header: 'Oczekiwany typ kontraktu', value: ContractType[item.expectedContractType] },
                { header: 'Oczekiwane wynagrodzenie miesięczne netto', value: item.expectedSalary + ' zł' },
                {
                    header: 'Zgoda na odbycie bezpłatnych praktyk/stażu na początek',
                    value: Internship[Number(item.canTakeApprenticeship)],
                },
                { header: 'Komercyjne doświadczenie w programowaniu', value: item.monthsOfCommercialExp.toString() },
            ],
            id: item.studentId,
            name: item.firstName + ' ' + item.lastName,
            reservationExpiresOn: item.reservationExpiresOn,
            githubUsername: item.githubUsername,
            open: false,
        }
    )

    );

    return result as StudentProps[];
}