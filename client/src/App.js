import "./App.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HeroInfo from "./components/HeroInfo";

export default function App() {
  const handleImageClick = (heroName) => {
    console.log(`You clicked on ${heroName}.`);
  }

  return (
    <div className="App">
      <Header />
      <NavBar onClick={(hero) => handleImageClick(hero)}/>
      <HeroInfo />
    </div>
  );
}
