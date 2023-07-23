module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "products",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      product_name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      brand: {
        type: DataTypes.STRING,
      },
      discount_value: {
        type: DataTypes.FLOAT,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Product;
};
