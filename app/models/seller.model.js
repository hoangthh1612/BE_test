module.exports = (sequelize, DataTypes) => {
  const Seller = sequelize.define("sellers", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    },
    fullname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
      },
    phone_number: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    
    
  },
    {
        timestamps: false,
    }
  );
  
  return Seller;
};

