import React from "react";
import md5 from "md5";

class NavBar extends React.Component {
  state = {
    ironMan: "",
    captainAmerica: "",
    thor: "",
    blackWidow: "",
    theHulk: "",
    hawkeye: "",
  };

  componentDidMount() {
    const ts = new Date().getTime();
    const message =
      ts + process.env.REACT_APP_PRI_KEY + process.env.REACT_APP_PUB_KEY;
    var hashedValue = md5(message);

    const heroes = {
      "ironMan": "iron man",
      "captainAmerica": "captain america",
      "thor": "thor",
      "blackWidow": "black widow",
      "theHulk": "hulk",
      "hawkeye": "hawkeye",
    }

    Object.entries(heroes).forEach(([stateKey, heroName]) => {
      fetch(
        `${process.env.REACT_APP_BASE_URL}/characters?name=${heroName}&ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hashedValue}`
      )
        .then((res) => res.json())
        .then((hero) => {
          this.setState({
            [stateKey]: hero.data.results[0].thumbnail.path,
          });
        })
        .catch((err) => console.log(err));
    });
  }

  render() {
    return (
      <div>
        <ul className="heroList">
          {Object.keys(this.state).map((hero) => {
            return (
              <li key={hero}>
                <img
                  onClick={() => this.props.onClick(hero)}
                  alt={hero}
                  src={`${this.state[hero]}/portrait_medium.jpg`}
                ></img>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NavBar;
