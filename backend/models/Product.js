export default (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Products",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        field: "imageUrl",
        allowNull: true,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );

  Product.associate = (models) => {
    Product.belongsToMany(models.Campaigns, {
      through: models.CampaignProducts,
      foreignKey: "productId",
      otherKey: "campaignId",
      as: "campaigns",
    });
  };

  return Product;
};
