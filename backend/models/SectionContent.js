export default (sequelize, DataTypes) => {
  const SectionContent = sequelize.define("SectionContent", {
    content: DataTypes.JSON,
  });

  SectionContent.associate = (models) => {
    SectionContent.belongsTo(models.TemplateSection);
    SectionContent.belongsTo(models.Campaign);
  };

  return SectionContent;
};
