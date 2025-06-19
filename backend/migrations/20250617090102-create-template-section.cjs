"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TemplateSections", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sectionType: Sequelize.ENUM("Hero", "ProductList", "Footer"),
      order: Sequelize.INTEGER,
      templateId: {
        type: Sequelize.INTEGER,
        references: { model: "Templates", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("TemplateSections");
  },
};
