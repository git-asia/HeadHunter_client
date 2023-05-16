import { UserCV } from "../../components/UserCV/UserCV";
import { UserCard } from "../../components/UserCard/UserCard";
import { IoIosArrowDown } from "react-icons/io";
import { Header } from "../../components/Header/Header";
import React, {useEffect, useState} from "react";

import "./CVView.scss";
import "../../index.scss"

interface Props {
    bio: string;
    bonusProjectUrls: string;
    canTakeApprenticeship: number;
    courseCompletion: number;
    courseEngagement: number;
    courses: string;
    education: string;
    expectedContractType: number;
    expectedSalary: number;
    expectedTypeWork: number;
    firstName: string;
    githubUsername: string;
    lastName: string;
    monthsOfCommercialExp: number;
    phoneNumber: string;
    portfolioUrls: string[];
    projectDegree: number;
    projectUrls: string[];
    targetWorkCity: string;
    teamProjectDegree: number;
    userStatus: number;
    workExperience: string
}

export const CVView = () => {
    const id = "46f84261-df9d-11ed-a2b7-24fd5235b3db";
    const [data, setData] = useState({
        bio:"",
        bonusProjectUrls : "",
        canTakeApprenticeship : 1,
        courseCompletion : 1,
        courseEngagement : 1,
        courses : "",
        education : "",
        expectedContractType : 1,
        expectedSalary : 0,
        expectedTypeWork : 1,
        firstName : "",
        githubUsername : "",
        lastName : "",
        monthsOfCommercialExp : 0,
        phoneNumber : "",
        portfolioUrls : [],
        projectDegree : 1,
        projectUrls : [],
        targetWorkCity : "",
        teamProjectDegree : 1,
        userStatus : 1,
        workExperience : "",
    });

    useEffect( () => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:3001/student/getcv/${id}`);
            const downloadData = (await res.json())[0];
            setData(downloadData);
            console.log(data);
        }
        fetchData()
            .catch(console.error);
    }, []);

  return (
    <div className="CVView__container">
      <Header/>
      <div className="CVView__wrapper">
        <div className="CVView__back">
          <IoIosArrowDown size={30} className="CVView__back__svg" />
          <span className="CVView__back__span">Wróć</span>
        </div>
        <UserCard
          aboutMe={data.bio}
          name={(data.firstName) + " " + (data.lastName)}
          github={data.githubUsername}
          email="email@gmail.com"
          phoneNumber={data.phoneNumber}
        />
        <UserCV
          grades={[
            { header: "Ocena projektu kursu", value: `${data.courseCompletion}/5` },
            { header: "Ocena aktywności i  zaangażowania na kursie", value: `${data.courseEngagement}/5` },
            { header: "Ocena kodu w projekcie własnym", value: `${data.teamProjectDegree}/5` },
            { header: "Ocena pracy w zespole w Scrum", value: `${data.projectDegree}/5` },
          ]}
          expectations={[
            { header: "Preferowane miejsce pracy", value: `${data.expectedTypeWork}` },
            { header: "Docelowe miasto, gdzie chce pracować kandydat", value: `${data.targetWorkCity}` },
            { header: "Oczekiwany typ kontraktu", value: `${data.expectedContractType}` },
            { header: "Oczekiwane wynagrodzenie miesięczne netto", value: `${data.expectedSalary} zł` },
            { header: "Zgoda na odbycie bezpłatnych praktyk/stażu na początek", value: `${data.canTakeApprenticeship}` },
            { header: "Komercyjne doświadczenie w programowaniu", value: `${data.monthsOfCommercialExp} miesięcy` },
          ]}
          education={data.education}
          courses={data.courses}
          experience={data.workExperience}
          portfolio={["https://test1.pl", "https://test3.pl", "https://test6.pl"]}
          finalProjects={["https://test1.pl", "https://test3.pl", "https://test7.pl"]}
          scramProjects={["https://test2.pl", "https://test4.pl", "https://test8.pl"]}
        />
      </div>
    </div>
  );
};
