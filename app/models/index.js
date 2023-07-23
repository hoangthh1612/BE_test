const config = require("../config/db.config.js");

const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, DataTypes);
db.role = require("../models/role.model.js")(sequelize, DataTypes);
db.order = require("../models/order.model.js")(sequelize, DataTypes);
db.buyer = require("../models/buyer.model.js")(sequelize, DataTypes);
db.seller = require("../models/seller.model.js")(sequelize, DataTypes);
db.product = require("../models/product.model.js")(sequelize, DataTypes);
db.livestream = require("../models/livestream.model.js")(sequelize, DataTypes);
db.category = require("../models/category.model.js")(sequelize, DataTypes);
db.size = require("../models/size.model.js")(sequelize, DataTypes);
db.color = require("../models/color.model.js")(sequelize, DataTypes);
db.productReview = require("../models/product-review.model.js")(sequelize, DataTypes);
db.cart = require("../models/cart.model.js")(sequelize, DataTypes);
db.admin = require("../models/admin.model.js")(sequelize, DataTypes);
db.feedback = require("../models/feedback.model.js")(sequelize, DataTypes);
db.order_detail = require("../models/order-detail.model.js")(sequelize, DataTypes);
db.voucher = require("../models/voucher.model.js")(sequelize, DataTypes);
db.cart_detail = require("../models/cart-detail.model.js")(sequelize, DataTypes);
db.livestream_product = require("../models/livestream-product.model.js")(sequelize, DataTypes);
db.like_share = require("../models/like-share.model.js")(sequelize, DataTypes);
db.view = require("../models/view.model.js")(sequelize, DataTypes);
db.chat = require("../models/chat.model.js")(sequelize, DataTypes);
db.product_detail = require("../models/product-detail.model.js")(sequelize, DataTypes);
// 

// seller-products
db.product.belongsTo(db.seller,{
  foreignKey: "sellerId", as: "sellers"
})
db.seller.hasMany(db.product, {
  foreignKey: "sellerId", as: 'product'
});

//
db.cart.belongsTo(db.buyer,{
  foreignKey: "buyerId", as: "buyers"
})
db.buyer.hasMany(db.cart);

//
db.feedback.belongsTo(db.buyer,{
  foreignKey: "senderId", as: "buyers"
})
//db.buyer.hasMany(db.feedback);

// Product detail
// db.product_detail.belongsTo(db.product, {
//   foreignKey: 'productId', as: 'products'
// })
// db.product.hasMany(db.product_detail);

// db.product_detail.belongsTo(db.size, {
//   foreignKey: 'sizeId', as: 'sizes'
// })
// db.product_detail.belongsTo(db.color, {
//   foreignKey: 'colorId', as: 'colors'
// })
// db.size.hasMany(db.product_detail);
// db.color.hasMany(db.product_detail);
//

db.product.belongsToMany(db.size, {
  through: db.product_detail,
  //foreignKey: 'productId'
})
db.size.belongsToMany(db.product, {
  through: db.product_detail,
  //foreignKey: 'sizeId'
})

db.product.belongsToMany(db.color, {
  through: db.product_detail,
  //foreignKey: 'productId'
})
db.color.belongsToMany(db.product, {
  through: db.product_detail,
  //foreignKey: 'colorId'
})

db.size.belongsToMany(db.color, {
  through: db.product_detail,
  //foreignKey: 'sizeId'
})
db.color.belongsToMany(db.size, {
  through: db.product_detail,
  //foreignKey: 'colorId'
})




db.role.belongsToMany(db.user, {
  through: "user_roles"
});
db.user.belongsToMany(db.role, {
  through: "user_roles"
});
db.product.belongsToMany(db.buyer,{
  through: db.productReview
})
db.buyer.belongsToMany(db.product,{
  through: db.productReview
})

// Order_detail
db.order.belongsToMany(db.product, {
  through: "order_details" 
})
db.product.belongsToMany(db.order, {
  through: "order_details" 
})

// Order_vouchers
db.order.belongsToMany(db.voucher, {
  through: "order_vouchers", 
})
db.voucher.belongsToMany(db.order, {
  through: "order_vouchers",
})
// Cart_details
db.cart.belongsToMany(db.product, {
  through: "cart_details", 
})
db.product.belongsToMany(db.cart, {
  through: "cart_details",
})

// Livestream_products
db.livestream.belongsToMany(db.product, {
  through: "livestream_products", 
})
db.product.belongsToMany(db.livestream, {
  through: "livestream_products",
})

// Like_share
db.livestream.belongsToMany(db.buyer, {
  through: "like_shares", 
})
db.buyer.belongsToMany(db.livestream, {
  through: "like_shares",
})

// View
db.livestream.belongsToMany(db.buyer, {
  through: "views", 
})
db.buyer.belongsToMany(db.livestream, {
  through: "views",
})

// Follow

db.buyer.belongsToMany(db.seller, {
  through: 'follows'
})
db.seller.belongsToMany(db.buyer, {
  through: 'follows'
})

// Chat
db.buyer.belongsToMany(db.seller, {
  through: 'chats'
})
db.seller.belongsToMany(db.buyer, {
  through: 'chats'
})





db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
