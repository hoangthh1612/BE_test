const db = require("../models");

const Color = db.color;

const getAll = async (req, res) => {
  const getColor= await Color.findAll();
  return res.status(201).json(getColor);

};

const create = async (req, res) => {
  await Color.create({
    color_name: req.body.color_name,
    
  })
    .then((color) => {
      res.send({
        message: "Color created successful",

      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = { getAll, create };
