const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const buyerRoute = require("./app/routes/buyer.routes");
const sellerRoute = require("./app/routes/seller.route");
const productRoute = require("./app/routes/product.route");
const colorRoute = require("./app/routes/color.route");
const sizeRoute = require("./app/routes/size.route");
const productDetailRoute = require("./app/routes/product-detail.route");
const categoryRoute = require("./app/routes/category.route");
const Role = db.role;


//force: true will drop the table if it already exists


// simple route

//
app.use('/api/buyer', buyerRoute);
//
app.use('/api/seller', sellerRoute);

app.use('/api/product', productRoute);

app.use('/api/color', colorRoute);

app.use('/api/size', sizeRoute);

app.use('/api/product-detail', productDetailRoute);

app.use('/api/category', categoryRoute);

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;

db.sequelize.sync({ force: false }).then(() => {
  console.log("Hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   Role.create({
//     id: 2,
//     name: "moderator"
//   });
 
//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }