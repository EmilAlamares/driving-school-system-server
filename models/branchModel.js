const mongoose = require("mongoose")

const branchSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a branch name."]},
  address: {
    type: String,
    required: [true, "Please add an address."]},
}, {timestamps: true})

module.exports = mongoose.model('Branch', branchSchema)