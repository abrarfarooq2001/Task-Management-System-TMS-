// models/Article.js

const mongoose = require("mongoose");

// Define a schema: this structures the data
const EmployeeForm = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  },
  role: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: false,
    enum: ["Single", "Married", "Divorced", "Widowed"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Compile the schema into a model
const Employee = mongoose.model("Employees", EmployeeForm);

module.exports = Employee; // Export the model for use in other files
