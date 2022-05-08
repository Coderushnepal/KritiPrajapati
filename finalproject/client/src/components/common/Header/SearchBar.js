import React from "react";

import SearchSvg from "../../../assets/icons/search.svg";

import "./styles/SearchBar.scss";

function SearchBar() {
  return (
    <div className="searchBar-container">
      <input className="searchInput" />
      <img src={SearchSvg} alt="search" className="searchIcon" />
    </div>
  );
}

export default SearchBar;