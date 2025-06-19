// backend/app.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import db from "#models/index";

import campaignRoutes from "#routes/campaign.routes";
import templateRoutes from "#routes/template.routes";
import sectionRoutes from "#routes/section.routes";
import sectionContentRoutes from "#routes/section-content.routes";
import productRoutes from "#routes/product.routes";
import frontendRoutes from "#routes/frontend.routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load routes
app.use("/campaigns", campaignRoutes);
app.use("/templates", templateRoutes);
app.use("/sections", sectionRoutes);
app.use("/section-contents", sectionContentRoutes);
app.use("/products", productRoutes);

// Special frontend endpoint
app.use("/campaign", frontendRoutes);

const PORT = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
