const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")

const sessionSchema = mongoose.Schema({
  studentId: {
    type: ObjectId,
  },
  instructorId: {
    type: ObjectId
  },
  date: {
    type: Date,
  },
  branch: {
    type: String
  },
  startTime: {
    type: String
  },
  endTime: {
    type: String
  },
  evaluations: {
    type: Array
  }
}, {timestamps: true})

module.exports = mongoose.model('Session', sessionSchema)