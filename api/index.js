const express = require("express");

// API test route and Express initialization
var testAPIRouter = require("./routes/testAPI");
const app = express();
app.use("/testAPI", testAPIRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
