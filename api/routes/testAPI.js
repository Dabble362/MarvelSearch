var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  fetch("http://example.com/movies.json")
    .then((response) => response.json())
    .then((data) => console.log(data));
  res.send(`API is working properly `);
});

module.exports = router;
