const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Employee = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "employees",
  }
);

module.exports = mongoose.model("Employee", Employee);
