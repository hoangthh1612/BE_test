module.exports = (sequelize, DataTypes) => {
  const orderDetail = sequelize.define(
    "order_details",
    {
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  return orderDetail;
};
