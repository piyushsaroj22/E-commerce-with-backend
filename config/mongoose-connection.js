const mongoose = require("mongoose");
const config = require("./development.json");
const dbgr = require("debug")("development:mongoose");

mongoose
  .connect(config.MONGODB_URI + "/E-commerce")
  .then(() => {
    dbgr("connected to database");
  })
  .catch((err) => {
    dbgr("error connecting to database", err);
  });

module.exports = mongoose.connection;
