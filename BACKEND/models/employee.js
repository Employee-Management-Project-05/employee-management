const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Employee = new Schema({
  employeeID: {
    type: String,
  },
  name: {
    type: String
  },
  address: {
    type: String,
  },
  nic: {
    type: String,
  },
  phoneNO: {
    type: Number
  },
});

const newEmployee = mongoose.model("employee", Employee); //create database collection

module.exports = newEmployee;