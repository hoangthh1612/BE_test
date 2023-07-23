const db = require("../models");

const Product = db.product;
const Seller = db.seller;
const Color = db.color;
const Size = db.size;
const Category = db.category;

const getAll = async (req, res) => {
  const getProduct = await Product.findAll({
    include: [
      {
        model: Seller,
        as: "sellers",
      },
      {
        model: Category,
        as: "categories",
      },
      {
        model: Size,
        as: 'sizes'
        
      },
      {
        model: Color,
        as: 'colors'
        
      },
    ],
  });
  return res.status(201).json(getProduct);
};

const create = async (req, res) => {
  await Product.create({
    product_name: req.body.product_name,
    description: req.body.description,
    brand: req.body.brand,
    discount_value: req.body.discount_value,
    image: req.body.image,
    sellerId: req.body.sellerId,
    categoryId: req.body.categoryId
  })
    .then((product) => {
      res.send({
        message: "Product created successful",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = { getAll, create };
