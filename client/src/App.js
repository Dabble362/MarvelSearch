import { Component } from "react";
import "./App.css";
import IronMan from "./components/loadIronMan";
import Header from "./components/header";
import NavBar from "./components/navigation";

class App extends Component {
  // const [selectedAvenger, setSelectedAvenger] = useState("");
  // const [showDetails, setShowDetails] = useState(false);
  // const [avengerData, setAvengerData] = useState([]);


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
