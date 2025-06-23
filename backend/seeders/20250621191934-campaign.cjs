"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Get all available templates
    const [templates] = await queryInterface.sequelize.query(
      `SELECT id FROM "Templates";`
    );

    if (templates.length === 0) {
      throw new Error("No templates found. Please seed templates first.");
    }

    const campaigns = [
      {
        name: "Summer Campaign",
        slug: "summer-campaign",
        language: "en",
      },
      {
        name: "Winter Campaign",
        slug: "winter-campaign",
        language: "en",
      },
      {
        name: "Spring Campaign",
        slug: "spring-campaign",
        language: "en",
      },
      {
        name: "Autumn Campaign",
        slug: "autumn-campaign",
        language: "en",
      },
    ].map((campaign) => ({
      ...campaign,
      templateId: templates[Math.floor(Math.random() * templates.length)].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Campaigns", campaigns, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Campaigns", null, {});
  },
};
