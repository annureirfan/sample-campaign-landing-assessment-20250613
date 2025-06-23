export default (sequelize, DataTypes) => {
  const Template = sequelize.define(
    "Templates",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      backgroundColor: {
        type: DataTypes.STRING,
        field: "backgroundColor",
        allowNull: false,
      },
      textColor: {
        type: DataTypes.STRING,
        field: "textColor",
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );

  Template.associate = (models) => {
    Template.hasMany(models.Campaigns, {
      foreignKey: "templateId",
      as: "campaigns",
    });
  };

  return Template;
};
