const express = require("express");

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("SERVER RUNNING IN PORT: 3000");
});
