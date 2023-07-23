module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define(
    "colors",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      color_name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Color;
};
