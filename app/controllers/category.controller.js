const db = require("../models");

const Category = db.category;

const getAll = async (req, res) => {
  const getCategory= await Category.findAll();
  return res.status(201).json(getCategory);

};

const create = async (req, res) => {
  await Category.create({
    category_name: req.body.category_name,
    description: req.body.description
    
  })
    .then((color) => {
      res.send({
        message: "Category created successful",

      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = { getAll, create };
