module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "orders",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      order_status: {
        type: DataTypes.ENUM("pending", "completed"),
      },
      payment_method: {
        type: DataTypes.ENUM("money", "completed"),
      },
      total_price: {
        type: DataTypes.INTEGER,
      },
      shipping_address: {
        type: DataTypes.STRING,
      },
      voucher: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  return Order;
};
