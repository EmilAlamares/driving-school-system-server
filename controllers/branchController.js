const Branch = require("../models/branchModel")
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")

const createBranch = asyncHandler(async (req, res) => {
  const { branch } = req.body

  const response = await Branch.create({
    name: branch,
  })
  
})

const getBranch = asyncHandler(async (req, res) => {

  const response = await Branch.find({})

  return res.json(response)
})

const getBranchUsers = asyncHandler(async (req, res) => {
  const { branch, type } = req.params
  let response

  console.log({branch, type})

  if (type == "Student")
    response = await User.aggregate([
      { $match: { type: "Student", branches: {$in: [branch]} } },
      {
        $lookup: {
          from: "users",
          localField: "instructorId",
          foreignField: "_id",
          as: "instructor",
        },
      },
      { $unwind: { path: "$instructor" } },
      { $project: { firstName: 1, lastName: 1, package: 1, branches: 1, status: 'In progress', instructor: {fullName: {$concat : ['$instructor.firstName', ' ', '$instructor.lastName']}} } },
    ])

  if (type == "Instructor")
    response = await User.aggregate([
      { $match: { type: "Instructor", branches: {$in: [branch]} } },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "instructorId",
          as: "students",
        },
      },
      // { $unwind: { path: "$students" } },
      { $project: { fullName: {$concat: ['$firstName', ' ', '$lastName']}, branches: 1, status: 'In progress', students: {firstName: 1, lastName: 1}} },
    ])

  // console.log(response)

  return res.json(response)
})

module.exports = {
  createBranch,
  getBranchUsers,
  getBranch
}
