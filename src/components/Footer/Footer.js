import React from "react";
import "./Footer.css";

export const Footer = ({ links, color }) => {
  return (
    <footer>
      <div className="links" style={{ color: color }}>
        {links.map((link) => {
          return (
            <a href={link.link}>
              <span>{link.name}</span>
            </a>
          );
        })}
      </div>
    </footer>
  );
};
