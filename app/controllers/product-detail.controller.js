const db = require("../models");
const Product = db.product;
const Color = db.color;
const Size = db.size;
const productDetail = db.product_detail;

console.log(Color);
console.log(Size);

const getAll = async (req, res) => {
  const getproductDetail = await productDetail.findAll();
  return res.status(201).json(getproductDetail);
};

const create = async (req, res) => {
  await productDetail
    .create({
      quantity: req.body.quantity,
      price: req.body.price,
      image: req.body.image,
      productId: req.body.productId,
      sizeId: req.body.sizeId,
      colorId: req.body.colorId,
    })
    .then((size) => {
      res.send({
        message: "productDetail created successful",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = { getAll, create };
