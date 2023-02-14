import { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HeroInfo from "./components/HeroInfo";

export default function App() {
  const [hero, setHero] = useState("my foo hero");

  const handleImageClick = (heroName) => {
    console.log(`You clicked on ${heroName}.`);
  }

  return (
    <div className="App">
      <Header />
      <NavBar
        onClick={(hero) => handleImageClick(hero)}
      />
      <HeroInfo
        propKeyForTesting={hero}
      />
    </div>
  );
}
