module.exports = (sequelize, DataTypes) => {
  const likeShare = sequelize.define(
    "like_shares",
    {
      action: {
        type: DataTypes.ENUM("like","share"),
      },
      time: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
    }
  );
  return likeShare;
};
