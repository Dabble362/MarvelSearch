import { Component } from "react";
import "./App.css";
import md5 from "md5";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  getMarvelCharacters() {
    let PUB_KEY = "00753159646691ae2094a5008957d748";
    let PRI_KEY = "c2bbc050c357f2e24c82b51d5079809c76bb6e58";
    let BASE_URL = "https://gateway.marvel.com/v1/public";

    let ts = new Date().getTime();

    let message = ts + PRI_KEY + PUB_KEY;
    var hashedValue = md5(message);
    console.log(md5(message));

    // md5 = require('js-md5');
    fetch(
      `${BASE_URL}/characters?&ts=${ts}&apikey=${PUB_KEY}&hash=${hashedValue}`
    )
      .then((res) => res.json())

      .then((data) => console.log(data.data.results))
      .catch((err) => console.log(err));
  }

  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //     .then((res) => res.text())
  //     .then((res) => this.setState({ apiResponse: res }))
  //     .catch((err) => err);
  // }

  componentDidMount() {
    this.getMarvelCharacters();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello There</h1>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
