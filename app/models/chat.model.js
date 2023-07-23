module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    "chats",
    {
      content: {
        type: DataTypes.STRING,
      },
      time: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
    }
  );
  return Chat;
};
