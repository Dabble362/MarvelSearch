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
    fetch(
      `${process.env.REACT_APP_BASE_URL}/characters?name=iron%20man&ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hashedValue}`
    )
      .then((res) => res.json())
      .then((hero) => {
        this.setState({
          ironMan: hero.data.results[0].thumbnail.path,
        });
      })
      .catch((err) => console.log(err));

    fetch(
      `${process.env.REACT_APP_BASE_URL}/characters?name=captain%20america&ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hashedValue}`
    )
      .then((res) => res.json())
      .then((hero) => {
        this.setState({
          captainAmerica: hero.data.results[0].thumbnail.path,
        });
      })
      .catch((err) => console.log(err));

    fetch(
      `${process.env.REACT_APP_BASE_URL}/characters?name=black%20widow&ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hashedValue}`
    )
      .then((res) => res.json())
      .then((hero) => {
        this.setState({
          blackWidow: hero.data.results[0].thumbnail.path,
        });
      })
      .catch((err) => console.log(err));

    fetch(
      `${process.env.REACT_APP_BASE_URL}/characters?name=hulk&ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hashedValue}`
    )
      .then((res) => res.json())
      .then((hero) => {
        this.setState({
          theHulk: hero.data.results[0].thumbnail.path,
        });
      })
      .catch((err) => console.log(err));

    fetch(
      `${process.env.REACT_APP_BASE_URL}/characters?name=thor&ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hashedValue}`
    )
      .then((res) => res.json())
      .then((hero) => {
        this.setState({
          thor: hero.data.results[0].thumbnail.path,
        });
      })
      .catch((err) => console.log(err));

    fetch(
      `${process.env.REACT_APP_BASE_URL}/characters?name=hawkeye&ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hashedValue}`
    )
      .then((res) => res.json())
      .then((hero) => {
        this.setState({
          hawkeye: hero.data.results[0].thumbnail.path,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <ul className="heroList">
          <li>
            <img
              alt="iron man"
              src={`${this.state.ironMan}/portrait_medium.jpg`}
            ></img>
          </li>
          <li>
            <img
              alt="captain america"
              src={`${this.state.captainAmerica}/portrait_medium.jpg`}
            ></img>
          </li>
          <li>
            <img
              alt="thor"
              src={`${this.state.thor}/portrait_medium.jpg`}
            ></img>
          </li>
          <li>
            <img
              alt="the hulk"
              src={`${this.state.theHulk}/portrait_medium.jpg`}
            ></img>
          </li>
          <li>
            <img
              alt="black widow"
              src={`${this.state.blackWidow}/portrait_medium.jpg`}
            ></img>
          </li>
          <li>
            <img
              alt="hawkeye"
              src={`${this.state.hawkeye}/portrait_medium.jpg`}
            ></img>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
