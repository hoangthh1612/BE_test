module.exports = (sequelize, DataTypes) => {
  const livestreamProducts = sequelize.define(
    "livestream_products",
    {
      order: {
        type: DataTypes.INTEGER,
      },
      expected_sell: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  return livestreamProducts;
};
