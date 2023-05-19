import React, { useState, KeyboardEvent } from 'react';

import "./NavbarStudents.scss"
import {useLocation, useNavigate} from "react-router-dom";

export const NavbarStudents = () => {
  const location = useLocation();
  let initial = 'allStudents';
  if(location.pathname === '/list/reserved') {
    initial = 'forInterview'
  }

  const [activeCategory, setActiveCategory] = useState(initial);
  const navigate = useNavigate();

  const handleClick = (category: string) => {
    setActiveCategory(category);
    if (category === 'allStudents') {
      navigate('/list'); // Przekierowanie na /list
    } else if (category === 'forInterview') {
      navigate('/list/reserved'); // Przekierowanie na /list/reserved
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLButtonElement>, category: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setActiveCategory(category);
    }
  };

  return (
    <div className="navbar-wrapper">
      <ul className="students-availability">
        <li>
          <button className={activeCategory === 'allStudents' ? 'active' : ''}
            onClick={() => handleClick('allStudents')}
            onKeyDown={(event) => handleKeyPress(event, 'allStudents')}
             aria-pressed={activeCategory === 'allStudents'}
          >
            Dostępni kursanci
          </button>
        </li>
        <li>
          <button className={activeCategory === 'forInterview' ? 'active' : ''}
            onClick={() => handleClick('forInterview')}
            onKeyDown={(event) => handleKeyPress(event, 'forInterview')}
            aria-pressed={activeCategory === 'forInterview'}
          >
            Do rozmowy
          </button>
        </li>
      </ul>
    </div>
  )
}