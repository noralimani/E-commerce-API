const express = require("express");
const bodyParser = require("body-parser");
const auth = require("./src/routes/auth");
const products = require("./src/routes/products");
const users = require("./src/routes/users");
const app = express();
const port = 4000;

// parse various different custom JSON types as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/nora", (req, res) => {
  res.send("Hello World from Nora!");
});

app.use("/", auth);
app.use("/", products);
app.use("/", users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
