const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please add an email."],
  },
  password: {
    type: String,
    required: [true, "Please add a password."],
  },
  firstName: {
    type: String,
    required: [true, "Please add a firstName."],
  },
  middleName: {
    type: String,
    required: [true, "Please add a middleName."],
  },
  lastName: {
    type: String,
    required: [true, "Please add a lastName."],
  },
  gender: {
    type: String,
    required: [true, "Please add a gender."],
  },
  birthDate: {
    type: String,
    required: [true, "Please add a birthDate."],
  },
  address: {
    type: String,
    required: [true, "Please add an address."],
  },
  contactNo: {
    type: String,
    required: [true, "Please add a contactNo."],
  },
  branches: {
    type: Array,
    required: [true, "Please add a branches."],
  },
  type: {
    type: String,
    required: [true, "Please add a type."],
  },
  package: {
    type: String,
  },
  instructorId: {
    type: ObjectId
  },
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)