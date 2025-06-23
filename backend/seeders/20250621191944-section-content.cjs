"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const [campaigns] = await queryInterface.sequelize.query(
      `SELECT id, name FROM "Campaigns" WHERE name IN ('Summer Campaign', 'Winter Campaign', 'Autumn Campaign', 'Spring Campaign')`
    );

    const seasonData = {
      "Summer Campaign": {
        hero: {
          title: "Summer Sale!",
          subtitle: "Beat the heat with up to 50% off!",
        },
        footer: {
          text: " 2025 Summer Collection. All rights reserved.",
        },
      },
      "Winter Campaign": {
        hero: {
          title: "Winter Clearance",
          subtitle: "Warm up with up to 60% off winter essentials!",
        },
        footer: {
          text: " 2025 Winter Collection. All rights reserved.",
        },
      },
      "Autumn Campaign": {
        hero: {
          title: "Autumn Special",
          subtitle: "Fall into savings with 40% off!",
        },
        footer: {
          text: " 2025 Autumn Collection. All rights reserved.",
        },
      },
      "Spring Campaign": {
        hero: {
          title: "Spring Refresh",
          subtitle: "New season, new styles! 30% off everything",
        },
        footer: {
          text: " 2025 Spring Collection. All rights reserved.",
        },
      },
    };

    const sectionContents = [];
    const now = new Date();

    campaigns.forEach((campaign) => {
      const data = seasonData[campaign.name] || seasonData["Summer Campaign"];

      // Add Hero section
      sectionContents.push({
        campaignId: campaign.id,
        sectionType: "Hero",
        content: JSON.stringify(data.hero),
        createdAt: now,
        updatedAt: now,
      });

      // Add Footer section
      sectionContents.push({
        campaignId: campaign.id,
        sectionType: "Footer",
        content: JSON.stringify(data.footer),
        createdAt: now,
        updatedAt: now,
      });
    });

    await queryInterface.bulkInsert("SectionContents", sectionContents, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("SectionContents", null, {});
  },
};
