import { Component } from "react";
import "./App.css";
import IronMan from "./components/loadIronMan";
import Header from "./components/header";
import NavBar from "./components/navigation";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <IronMan />
      </div>
    );
  }
}

export default App;
