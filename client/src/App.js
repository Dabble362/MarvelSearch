import "./App.css";

import IronMan from "./components/loadIronMan";
import Header from "./components/header";
import NavBar from "./components/navigation";

export default function App() {
  const handleImageClick = (heroName) => {
    console.log(`You clicked on ${heroName}.`);
  }

  return (
    <div className="App">
      <Header />
      <NavBar onClick={(hero) => handleImageClick(hero)}/>
      <IronMan />
    </div>
  );
}
