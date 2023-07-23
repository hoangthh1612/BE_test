module.exports = (sequelize, DataTypes) => {
  const Voucher = sequelize.define(
    "vouchers",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      discount_value: {
        type: DataTypes.FLOAT,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      apply: {
        type: DataTypes.INTEGER,
      },
      userId_create: {
        type: DataTypes.INTEGER,
      },
      create_date: {
        type: DataTypes.DATE,
      },
      expire_time: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
    }
  );
  return Voucher;
};
