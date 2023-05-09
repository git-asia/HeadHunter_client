import { UserCV } from "../../components/UserCV/UserCV";
import { UserCard } from "../../components/UserCard/UserCard";
import { IoIosArrowDown } from "react-icons/io";
import { Header } from "../../components/Header/Header";
import React from "react";

import "./CVView.scss";
import "../../index.scss"

export const CVView = () => {
  return (
    <div className="CVView__container">
      <Header/>
      <div className="page__container">
        <div className="CVView__back">
          <IoIosArrowDown size={30} className="CVView__back__svg" />
          <span className="CVView__back__span">Wróć</span>
        </div>
        <div className="CVView__wrapper">
          <UserCard
            aboutMe={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ratione esse nostrum eveniet distinctio facilis cumque, iusto eius unde? Velit suscipit dolorem excepturi magnam ut incidunt aspernatur expedita, doloremque esse."
            }
            name="Imię Nazwisko"
            github="github"
            email="email@gmail.com"
            phoneNumber="+48123456789"
          />
          <UserCV
            grades={[
              { header: "Ocena projektu kursu", value: "3/5" },
              { header: "Ocena aktywności i  zaangażowania na kursie", value: "5/5" },
              { header: "Ocena kodu w projekcie własnym", value: "5/5" },
              { header: "Ocena pracy w zespole w Scrum", value: "4/5" },
            ]}
            expectations={[
              { header: "Preferowane miejsce pracy", value: "Biuro" },
              { header: "Docelowe miasto, gdzie chce pracować kandydat", value: "Warszawa" },
              { header: "Oczekiwany typ kontraktu", value: "Umowa o pracę" },
              { header: "Oczekiwane wynagrodzenie miesięczne netto", value: "8000 zł" },
              { header: "Zgoda na odbycie bezpłatnych praktyk/stażu na początek", value: "Tak" },
              { header: "Komercyjne doświadczenie w programowaniu", value: "6 Miesięcy" },
            ]}
            education={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat sit amet ex in tincidunt. Proin eget magna urna. Vivamus vitae velit nec massa pharetra tincidunt. Nullam ornare fringilla nulla in faucibus. Donec accumsan venenatis magna id aliquet. Integer a rutrum lectus. Ut feugiat tincidunt convallis. "
            }
            courses={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat sit amet ex in tincidunt. Proin eget magna urna. Vivamus vitae velit nec massa pharetra tincidunt. Nullam ornare fringilla nulla in faucibus. Donec accumsan venenatis magna id aliquet. Integer a rutrum lectus. Ut feugiat tincidunt convallis. "
            }
            experience={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat sit amet ex in tincidunt. Proin eget magna urna. Vivamus vitae velit nec massa pharetra tincidunt. Nullam ornare fringilla nulla in faucibus. Donec accumsan venenatis magna id aliquet. Integer a rutrum lectus. Ut feugiat tincidunt convallis. "
            }
            portfolio={["https://test1.pl", "https://test3.pl", "https://test6.pl"]}
            finalProjects={["https://test1.pl", "https://test3.pl", "https://test7.pl"]}
            scramProjects={["https://test2.pl", "https://test4.pl", "https://test8.pl"]}
          />
        </div>
      </div>
    </div>
  );
};
