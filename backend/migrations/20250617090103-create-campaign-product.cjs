"use strict";

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("CampaignProducts", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      campaignId: {
        type: DataTypes.INTEGER,
        references: { model: "Campaigns", key: "id" },
        onDelete: "CASCADE",
      },
      productId: {
        type: DataTypes.INTEGER,
        references: { model: "Products", key: "id" },
        onDelete: "CASCADE",
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("CampaignProducts");
  },
};
