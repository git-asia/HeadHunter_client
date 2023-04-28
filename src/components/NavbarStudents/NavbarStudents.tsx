import React from "react";

import "./NavbarStudents.scss"

export const NavbarStudents = () => {
  return (
    <div className="navbar-wrapper">
      <ul className="students-availability">
        <li className="availability-option">
          <p>Dostępni kursanci</p>
        </li>
        <li className="availability-option">
          <p>Do rozmowy</p>
        </li>
      </ul>
    </div>
  )
}