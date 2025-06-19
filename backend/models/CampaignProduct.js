export default (sequelize, DataTypes) => {
  const CampaignProduct = sequelize.define("CampaignProduct", {
    campaignId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  });

  return CampaignProduct;
};
