import React, { useState } from "react";
import "./styles/App.css";
import { ThemeContext2 } from "./context/ThemeContext";
import { Header } from "./components/Header";
import { CardCharacters } from "./components/CardCharacters";
function App() {
  const [theme, setTheme] = useState("bg-light");
  return (
    <ThemeContext2.Provider value={{ theme, setTheme }}>
      <div className={ theme}>
        <Header />
        <CardCharacters/>
      </div>
    </ThemeContext2.Provider>
  );
}

export default App;
