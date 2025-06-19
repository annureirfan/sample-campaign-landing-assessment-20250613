export default (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    imageUrl: DataTypes.STRING,
  });

  Product.associate = (models) => {
    Product.belongsToMany(models.Campaign, {
      through: models.CampaignProduct,
      foreignKey: "productId",
    });
  };

  return Product;
};
