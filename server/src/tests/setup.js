let { config } = require("dotenv");

module.exports = function setup() {
  config();
  process.env.NODE_ENV = "testing";
};
