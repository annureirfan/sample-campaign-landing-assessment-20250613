export default (sequelize, DataTypes) => {
  const TemplateSection = sequelize.define("TemplateSection", {
    sectionType: DataTypes.ENUM("Hero", "ProductList", "Footer"),
    order: DataTypes.INTEGER,
  });

  TemplateSection.associate = (models) => {
    TemplateSection.belongsTo(models.Template);
    TemplateSection.hasMany(models.SectionContent);
  };

  return TemplateSection;
};
