const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")

const branchSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a branch name."]},
}, {timestamps: true})

module.exports = mongoose.model('Branch', branchSchema)