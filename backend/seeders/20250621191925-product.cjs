"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "T-Shirt",
          price: 29.99,
          imageUrl: "tshirt.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hat",
          price: 19.99,
          imageUrl: "hat.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shoes",
          price: 49.99,
          imageUrl: "shoes.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jacket",
          price: 99.99,
          imageUrl: "jacket.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pants",
          price: 39.99,
          imageUrl: "pants.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gloves",
          price: 9.99,
          imageUrl: "gloves.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Socks",
          price: 4.99,
          imageUrl: "socks.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
