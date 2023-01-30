const express = require("express");
var cors = require("cors");

//express initialization
const app = express();

// mounts cors
app.use(cors());

// API test route
var testAPIRouter = require("./routes/testAPI");
app.use("/testAPI", testAPIRouter);

// establish response Hello World when navigating to the main route or index ("/")
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// establish port and tell server to listen on it for responses
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
