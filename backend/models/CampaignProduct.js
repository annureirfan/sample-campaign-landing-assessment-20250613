export default (sequelize, DataTypes) => {
  const CampaignProduct = sequelize.define(
    "CampaignProducts",
    {
      campaignId: {
        type: DataTypes.INTEGER,
        field: "campaignId",
        allowNull: false,
        references: {
          model: "Campaigns",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      productId: {
        type: DataTypes.INTEGER,
        field: "productId",
        allowNull: false,
        references: {
          model: "Products",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "CampaignProducts",
      indexes: [
        {
          unique: true,
          fields: ["campaignId", "productId"],
        },
      ],
    }
  );

  return CampaignProduct;
};
