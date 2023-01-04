const Branch = require("../models/branchModel")
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")

const createBranch = asyncHandler(async (req, res) => {
  const { branch } = req.body

  const response = await Branch.create({
    name: branch,
  })

  console.log(response)
})

const getBranchUsers = asyncHandler(async (req, res) => {
  const { branch, type } = req.params

  const response = await User.find({ branches: branch, type}, {firstName: 1})
  res.json(response)
})

module.exports = {
  createBranch,
  getBranchUsers,
}
