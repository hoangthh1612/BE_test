module.exports = (sequelize, DataTypes) => {
    const cartDetail = sequelize.define(
      "cart_details",
      {
        quantity: {
          type: DataTypes.INTEGER,
        },
      },
      {
        timestamps: false,
      }
    );
    return cartDetail;
  };
  