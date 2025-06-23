"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Get all campaigns and products
    const [campaigns] = await queryInterface.sequelize.query(
      `SELECT id FROM "Campaigns";`
    );

    const [products] = await queryInterface.sequelize.query(
      `SELECT id FROM "Products";`
    );

    // Create campaign-product associations
    const campaignProducts = [];

    // For each campaign, randomly select 30-70% of products
    campaigns.forEach((campaign) => {
      // Determine how many products to assign (30-70% of total products)
      const productCount = Math.floor(
        products.length * (0.3 + Math.random() * 0.4)
      );

      // Shuffle products and take the first 'productCount' items
      const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
      const selectedProducts = shuffledProducts.slice(0, productCount);

      // Create associations
      selectedProducts.forEach((product) => {
        campaignProducts.push({
          campaignId: campaign.id,
          productId: product.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    });

    await queryInterface.bulkInsert("CampaignProducts", campaignProducts, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("CampaignProducts", null, {});
  },
};
