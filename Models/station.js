const { Schema, model } = require("mongoose");

const StationSchema = Schema({
  name: {
    type: String,
    require: [true, "name is required"],
  },
  obcn: {
    type: String,
    require: [true, "obcn is required"],
  },
  location: {
    type: String,
    require: [true, "location is required"],
  },
  latitude: {
    type: Number,
    require: [true, "latitude is required"],
  },
  longitude: {
    type: Number,
    require: [true, "longitude is required"],
  },
  status: {
    type: String,
    require: [true, "status is required"],
  },
});

module.exports = model("Station", StationSchema);
