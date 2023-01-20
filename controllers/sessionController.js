const Session = require("../models/sessionModel")
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")

const createSession = asyncHandler(async (req, res) => {
  const { sessions, instructorId, studentId, branch } = req.body

  // const instructor = await User.findById(instructorId)

  sessions.forEach(async (session) => {
    await Session.create({
      studentId,
      instructorId,
      date: session.date,
      startTime: session.startTime,
      endTime: session.endTime,
      branch,
    })
  })

  return
})

const getSessions = asyncHandler(async (req, res) => {
  const { branch } = req.params

  const response = await Session.find({ branch }).sort({ _id: 1 })

  return res.json(response)
})

const searchSession = asyncHandler(async (req, res) => {

  const response = await Session.findById(req.params.id)

  res.json(response)
})

const getAllSessions = asyncHandler(async (req, res) => {
  const response = await Session.find({})

  return res.json(response)
})

const updateEvaluation = asyncHandler(async (req, res) => {
  const response = await Session.updateOne(
    { _id: req.params.id },
    { $set: { evaluations: req.body.evaluations } }
  )

  return res.json(response)
})

module.exports = {
  createSession,
  getSessions,
  getAllSessions,
  updateEvaluation,
  searchSession
}
