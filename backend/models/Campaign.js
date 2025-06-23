export default (sequelize, DataTypes) => {
  const Campaign = sequelize.define(
    "Campaigns",
    {
      name: DataTypes.STRING,
      slug: { type: DataTypes.STRING, unique: true },
      language: DataTypes.ENUM("en", "zh", "ms"),
      templateId: {
        type: DataTypes.INTEGER,
        field: "templateId",
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );

  Campaign.associate = (models) => {
    Campaign.belongsTo(models.Templates, {
      foreignKey: "templateId",
      as: "template",
    });

    Campaign.hasMany(models.SectionContents, {
      foreignKey: "campaignId",
      as: "sectionContents",
    });

    Campaign.belongsToMany(models.Products, {
      through: models.CampaignProducts,
      foreignKey: "campaignId",
      otherKey: "productId",
      as: "products",
    });
  };

  return Campaign;
};
