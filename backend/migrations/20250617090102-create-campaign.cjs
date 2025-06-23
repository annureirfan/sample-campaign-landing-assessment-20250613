"use strict";

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("Campaigns", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      slug: { type: DataTypes.STRING, unique: true },
      language: DataTypes.ENUM("en", "zh", "ms"),
      templateId: {
        type: DataTypes.INTEGER,
        references: { model: "Templates", key: "id" },
        onDelete: "CASCADE",
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Campaigns");
  },
};
