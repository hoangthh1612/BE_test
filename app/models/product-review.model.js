module.exports = (sequelize, DataTypes) => {
    const productReview = sequelize.define("productReview", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      review_title: {
        type: DataTypes.STRING
      },
      review_content: {
        type: DataTypes.STRING
      },
      rating: {
        type: DataTypes.FLOAT
      },
      review_date: {
        type: DataTypes.DATE
      },
      

    },
      {
          timestamps: false,
      }
    );
    return productReview;
  };
  
  