const db = require("../models");

const Size = db.size;

const getAll = async (req, res) => {
  const getSize = await Size.findAll();
  return res.status(201).json(getSize);
};

const create = async (req, res) => {
  await Size.create({
    size_name: req.body.size_name,
    
  })
    .then((size) => {
      res.send({
        message: "Size created successful",

      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = { getAll, create };
