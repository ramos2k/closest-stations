const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/", require("./routes/stations"));

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("DB Connected..."))
  .catch((error) => console.error(error));

app.listen(3000, () => {
  console.log("SERVER RUNNING IN PORT: 3000");
});
