module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define(
    "feedback",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      content: {
        type: DataTypes.STRING,
      },
      creation_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      image: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.ENUM("peding","active")
      },
      status: {
        type: DataTypes.ENUM("peding","active")
      }
    },
    {
      timestamps: false,
    }
  );
  return Feedback;
};
