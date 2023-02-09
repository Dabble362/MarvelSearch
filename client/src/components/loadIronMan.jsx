import React from "react";
import md5 from "md5";

class IronMan extends React.Component {
  state = {
    name: "",
    description: "",
    imagePath: "",
  };

  componentDidMount() {
    let rEACT_APP_PUB_KEY = "00753159646691ae2094a5008957d748";
    let rEACT_APP_PRI_KEY = "c2bbc050c357f2e24c82b51d5079809c76bb6e58";
    let rEACT_APP_BASE_URL = "https://gateway.marvel.com/v1/public";
    let searchQuery = "iron%20man";
    let ts = new Date().getTime();
    let message = ts + rEACT_APP_PRI_KEY + rEACT_APP_PUB_KEY;
    var hashedValue = md5(message);

    fetch(
      `${rEACT_APP_BASE_URL}/characters?name=${searchQuery}&ts=${ts}&apikey=${rEACT_APP_PUB_KEY}&hash=${hashedValue}`
    )
      .then((res) => res.json())
      .then((hero) => {
        console.log(hero.data.results[0]);
        this.setState({
          name: hero.data.results[0].name,
          description: hero.data.results[0].description,
          imagePath: hero.data.results[0].thumbnail.path,
        });
      })

      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <img
          alt="iron man"
          src={`${this.state.imagePath}/portrait_medium.jpg`}
        ></img>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default IronMan;
