export default (sequelize, DataTypes) => {
  const Campaign = sequelize.define("Campaign", {
    name: DataTypes.STRING,
    slug: { type: DataTypes.STRING, unique: true },
    language: DataTypes.ENUM("en", "zh", "ms"),
  });

  Campaign.associate = (models) => {
    Campaign.belongsTo(models.Template);
    Campaign.belongsToMany(models.Product, {
      through: models.CampaignProduct,
      foreignKey: "campaignId",
    });
    Campaign.hasMany(models.SectionContent);
  };

  return Campaign;
};
