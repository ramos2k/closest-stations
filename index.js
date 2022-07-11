const express = require("express");

const app = express();

app.use(express.json());

app.use("/", require("./routes/stations"));

app.listen(3000, () => {
  console.log("SERVER RUNNING IN PORT: 3000");
});
