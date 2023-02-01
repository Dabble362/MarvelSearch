import { Component } from "react";
import "./App.css";
import md5 from "md5";
import IronMan from "./components/loadIronMan";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  getMarvelCharacters() {
    let PUB_KEY = "00753159646691ae2094a5008957d748";
    let PRI_KEY = "c2bbc050c357f2e24c82b51d5079809c76bb6e58";
    let BASE_URL = "https://gateway.marvel.com/v1/public";

    let searchQuery = "spider-man";

    let ts = new Date().getTime();

    let message = ts + PRI_KEY + PUB_KEY;
    var hashedValue = md5(message);

    fetch(
      `${BASE_URL}/characters?nameStartsWith=${searchQuery}&ts=${ts}&apikey=${PUB_KEY}&hash=${hashedValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.results);
        this.setState({ apiResponse: data.data.results[0].name });
      })

      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getMarvelCharacters();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello There</h1>
        <p>{this.state.apiResponse}</p>
        <IronMan />
      </div>
    );
  }
}

export default App;
