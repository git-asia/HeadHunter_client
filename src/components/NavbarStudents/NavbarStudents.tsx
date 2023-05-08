import React, { useState, KeyboardEvent } from 'react';

import "./NavbarStudents.scss"

export const NavbarStudents = () => {

  const [activeCategory, setActiveCategory] = useState('allStudents');

  const handleClick = (category: string) => {
    setActiveCategory(category);
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