"use strict";

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("SectionContents", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      sectionType: DataTypes.ENUM("Hero", "Footer"),
      content: DataTypes.JSON,
      campaignId: {
        type: DataTypes.INTEGER,
        references: { model: "Campaigns", key: "id" },
        onDelete: "CASCADE",
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("SectionContents");
  },
};
