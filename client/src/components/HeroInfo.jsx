import { useEffect, useState } from "react";
import md5 from "md5";

const HERO_SEARCH_QUERIES = {
  "ironMan": "iron man",
  "captainAmerica": "captain america",
  "thor": "thor",
  "blackWidow": "black widow",
  "theHulk": "hulk",
  "hawkeye": "hawkeye",
}

export default function HeroInfo(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const searchQuery = HERO_SEARCH_QUERIES[props.selectedHero];
      const ts = new Date().getTime();
      const message =
        ts + process.env.REACT_APP_PRI_KEY + process.env.REACT_APP_PUB_KEY;
      var hashedValue = md5(message);

      fetch(
        `${process.env.REACT_APP_BASE_URL}/characters?name=${searchQuery}&ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hashedValue}`
      )
        .then((res) => res.json())
        .then((hero) => {
          console.log(hero);
          setName(hero.data.results[0].name);
          setDescription(hero.data.results[0].description);
          setImagePath(hero.data.results[0].thumbnail.path);
        })
        .catch((err) => console.log(err));
    }

    return () => {
      mounted = false;
    };
  }, [props.selectedHero]);

  return (
    <div>
      <h2>{props.selectedHero}</h2>
      <h2>{name}</h2>
      <img
        alt={props.selectedHero}
        src={`${imagePath}/portrait_uncanny.jpg`}
      />
      <p>{description}</p>
    </div>
  );
}
