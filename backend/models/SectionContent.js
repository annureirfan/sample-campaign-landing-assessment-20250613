export default (sequelize, DataTypes) => {
  const SectionContent = sequelize.define("SectionContents", {
    sectionType: DataTypes.ENUM("Hero", "ProductList", "Footer"),
    content: DataTypes.JSON,
    campaignId: {
      type: DataTypes.INTEGER,
      field: "campaignId",
      allowNull: false,
    },
  });

  SectionContent.associate = (models) => {
    SectionContent.belongsTo(models.Campaigns, {
      foreignKey: "campaignId",
      as: "campaign",
    });
  };

  return SectionContent;
};
