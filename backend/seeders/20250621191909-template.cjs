"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Templates",
      [
        {
          name: "Yellow",
          backgroundColor: "#FFD500",
          textColor: "#111827",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blue",
          backgroundColor: "#1D4ED8",
          textColor: "#111827",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Red",
          backgroundColor: "#FF0000",
          textColor: "#111827",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Templates", null, {});
  },
};
