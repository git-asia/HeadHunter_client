import React, { useState } from 'react';

import "./NavbarStudents.scss"

export const NavbarStudents = () => {

  const [activeCategory, setActiveCategory] = useState('allStudents');

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  const handleKeyPress = (event, category) => {
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
             tabIndex="0"
             aria-pressed={activeCategory === 'allStudents'}
             type="button"
          >
            Dostępni kursanci
          </button>
        </li>
        <li>
          <button className={activeCategory === 'forInterview' ? 'active' : ''}
            onClick={() => handleClick('forInterview')}
            onKeyDown={(event) => handleKeyPress(event, 'forInterview')}
            tabIndex="0"
            aria-pressed={activeCategory === 'forInterview'}
            type="button"
          >
            Do rozmowy
          </button>
        </li>
      </ul>
    </div>
  )
}