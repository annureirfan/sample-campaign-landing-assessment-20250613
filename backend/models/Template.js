export default (sequelize, DataTypes) => {
  const Template = sequelize.define("Template", {
    name: DataTypes.STRING,
  });

  Template.associate = (models) => {
    Template.hasMany(models.TemplateSection);
    Template.hasMany(models.Campaign);
  };

  return Template;
};
