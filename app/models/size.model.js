module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define(
    "sizes",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      size_name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Size;
};
