// config/config.js
require("dotenv").config(); // Load env variables from .env

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "millerealm_campaign",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
  },
};
