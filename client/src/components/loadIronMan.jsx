import React from "react";
import md5 from "md5";

class IronMan extends React.Component {
  state = {
    profile: [],
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
      .then((data) => {
        console.log(data.data.results[0]);
        this.setState({ profile: data.data.results[0] });
      })

      .catch((err) => console.log(err));
  }

  render() {
    const { thumbnail } = this.state.profile;
    const url = `http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55`;
    return (
      <div>
        <h2>{this.state.profile.name}</h2>
        <img alt="iron man" src={`${url}/portrait_medium.jpg`}></img>
        <p>{this.state.profile.description}</p>
      </div>
    );
  }
}

export default IronMan;
