import React from "react";
import "./searchBar.css";

//frame done, need to add props accordingly (also need to create var colors in css)

export const SearchBar = ({
  primaryColor = "black",
  secondaryColor = "green",
}) => {
  return (
    <form className="search-bar" action="/" method="get">
      <label htmlFor="search">
        <span className="search-bar-hidden">Search</span>
      </label>
      <input
        backgroundColor={primaryColor}
        type="text"
        id="search"
        placeholder="&#xF002;&emsp; type something..." //have to add font awesome
        name="s"
      />
      <button
        className="search-bar-button"
        type="submit"
        backgroundColor={secondaryColor}
      >
        &nbsp;find
      </button>
    </form>
  );
};
