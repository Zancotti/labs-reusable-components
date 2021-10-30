import React from 'react';
import './Header.css';

export const Header = ({ title, backgroundColor }) => {
  return (
    <header style={{ backgroundColor: backgroundColor }}>
      <nav>
        <span>about</span>
        <span>trips</span>
        <span>pricing</span>
        <span>contact</span>
      </nav>

      <h1>{title}</h1>
    </header>
  );
};
