// let md5 = require("js-md5");

// async function getMarvelCharacters() {
//   let PUB_KEY = "00753159646691ae2094a5008957d748";
//   let PRI_KEY = "c2bbc050c357f2e24c82b51d5079809c76bb6e58";
//   let BASE_URL = "https://gateway.marvel.com/";

//   let ts = new Date().getTime();

//   let message = ts + PRI_KEY + PUB_KEY;
//   let hash = md5.create();
//   hash.update(message);
//   let hashedMessage = hash.hex();
//   // md5 = require('js-md5');
//   fetch(`${BASE_URL}/characters?ts=${ts}&hash=${hashedMessage}`)
//     .then((res) => res.json)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// export { getMarvelCharacters as default };
