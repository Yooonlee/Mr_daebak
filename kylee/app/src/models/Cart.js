"use strict";
const mongoose = require("mongoose");


const cartSchema = mongoose.Schema({
  dinnerMenu: {
    type: String,
    maxlength: 150,
  },
  dinnerStyle: {
    type: String,
    maxlength: 150,
  },
  num: {
    type: Number,
  },
  price: {
    type: Number,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
    default : "a",
  },
  status: {
    type: String,
    default : "waiting",
  },
});


const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart };

