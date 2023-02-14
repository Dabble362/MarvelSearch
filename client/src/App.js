// import { Component } from "react";
import "./App.css";
import IronMan from "./components/loadIronMan";
import Header from "./components/header";
import NavBar from "./components/navigation";

function App() {
//   const [selectedAvenger, setSelectedAvenger] = useState("");
//   const [showDetails, setShowDetails] = useState(false);
//   const [avengerData, setAvengerData] = useState([]);

  const handleImageClick = (image) => {
    // setSelectedAvenger(image);
    // setShowDetails(true);
  }

  const handleClosedDetails = () => {
    // setShowDetails(false);
  }

  return (
    <div className="App">
      <Header />
      {/* <NavBar onImageClick={handleImageClick} imagesData={imagesData} /> */}
      <NavBar onImageClick={handleImageClick}/>
      {/* {showDetails && (
        <IronMan
          image={selectedAvenger}
          onCloseDetails={handleClosedDetails}
        />
      )} */}
      <IronMan />
    </div>
  );
}

// function ImageDetails({ image, onCloseDetails }) {
//   return (
//     <div>
//       <h1>{image.name}</h1>
//       <p>{image.description}</p>
//       <button onClick={onCloseDetails}>Close</button>
//     </div>
//   );
// }

export default App;
