import React from "react";
import "./styles/App.css";
import { Header } from "./components/Header";
import { CardCharacters } from "./components/CardCharacters";
function App() {
  return (
    <div>
      <Header />
      <CardCharacters />
    </div>
  );
}

export default App;
