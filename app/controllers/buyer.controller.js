const db = require("../models");
const Buyer = db.buyer;
const create = (req, res) => {
  Buyer.create({
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address,
  })
    .then((user) => {
      console.log(user);
      res.send({
        message: "Buyer registered successful",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
  //res.send("create buyer");
};

const getAll = async (req, res) => {
  try {
    const getBuyer = await Buyer.findAll();
    res.status(201).json(getBuyer);
  }
  catch(err) {
    console.error(err);
  }
};

module.exports = { create, getAll };
