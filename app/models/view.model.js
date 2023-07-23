module.exports = (sequelize, DataTypes) => {
  const View = sequelize.define(
    "views",
    {
      time_in: {
        type: DataTypes.DATE,
      },
      time_out: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
    }
  );
  return View;
};
