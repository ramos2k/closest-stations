const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("DB Connected..."))
  .catch((error) => console.error(error));

app.listen(3000, () => {
  console.log("SERVER RUNNING IN PORT: 3000");
});

module.exports = app;
