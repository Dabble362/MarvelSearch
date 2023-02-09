import React from "react";
import md5 from "md5";

class IronMan extends React.Component {
  state = {
    name: "",
    description: "",
    imagePath: "",
  };

  componentDidMount() {
    const searchQuery = "iron%20man";
    const ts = new Date().getTime();
    const message =
      ts + process.env.REACT_APP_PRI_KEY + process.env.REACT_APP_PUB_KEY;
    var hashedValue = md5(message);

    fetch(
      `${process.env.REACT_APP_BASE_URL}/characters?name=${searchQuery}&ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hashedValue}`
    )
      .then((res) => res.json())
      .then((hero) => {
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
          src={`${this.state.imagePath}/portrait_uncanny.jpg`}
        ></img>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default IronMan;
