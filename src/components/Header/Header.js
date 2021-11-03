import React from "react";
import "./Header.css";

export const Header = ({ title, backgroundColor }) => {
  return (
    <header style={{ backgroundColor: backgroundColor }}>
      <span className="circle"></span>
      <nav>
        <span>about</span>
        <span>trips</span>
        <span>pricing</span>
        <span>contact</span>
      </nav>
      <span className="title">{title}</span>
    </header>
  );
};
