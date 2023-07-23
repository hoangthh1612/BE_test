const db = require("../models");

const Seller = db.seller;

const getAll = async (req, res) => {
  const getSeller = await Seller.findAll();
  return res.status(201).json(getSeller);
};

const create = async (req, res) => {
  await Seller.create({
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
    email: req.body.email,
    description: req.body.description,
    phone_number: req.body.phone_number,
    address: req.body.address,
    avatar: req.body.avatar,
  })
    .then((user) => {
      console.log(user);
      res.send({
        message: "Seller registered successful",

      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = { getAll, create };
