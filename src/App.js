import React, { useState } from "react";
import "./styles/App.css";
import { ThemeContext2 } from "./context/ThemeContext";
import { Characters } from "./components/Characters";
import { Header } from "./components/Header";
function App() {
  const [theme, setTheme] = useState("bg-light");
  return (
    <ThemeContext2.Provider value={{ theme, setTheme }}>
      <div className={ theme}>
        <Header />
        <Characters />
      </div>
    </ThemeContext2.Provider>
  );
}

export default App;
