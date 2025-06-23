// backend/app.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import db from "#models/index";

import templateRoutes from "#routes/template.routes";
import campaignRoutes from "#routes/campaign.routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load routes
app.use("/templates", templateRoutes);
app.use("/campaigns", campaignRoutes);

const PORT = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to multi campaign API" });
});
