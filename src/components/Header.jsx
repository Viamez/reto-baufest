import React, { useContext, useState } from "react";
import { ThemeContext2 } from "../context/ThemeContext";
import "../styles/Header.css"

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext2);

  const handleClick = () => {
    setDarkMode(!darkMode);
    theme === "bg-light" ? setTheme("bg-dark") : setTheme("bg-light");
  };
  
  return (
    <div className="Header">
      <h1 className="title-Header">Reto baufest</h1>
      <button 
        type="button" 
        onClick={handleClick}
        className="button-Header"
      >
        {darkMode ? <i className="fas fa-sun fa-3x" /> : <i className="fas fa-moon fa-3x" />}
      </button>
    </div>
  );
};

export { Header };
