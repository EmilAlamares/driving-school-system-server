const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler")

// const getUser = asyncHandler(async (req, res) => {
//   // Secure this in the future.

//   const user = await User.find()
//   res.json({ user })
// })

// const searchUser = asyncHandler(async (req, res) => {
//   const usernameRegex = new RegExp(`^${req.params.username}`, "i")

//   let user = await User.aggregate([{$lookup: {from: 'conversations', localField: 'username', foreignField: 'usersName', as: 'conversation'}}, {$match: {username: usernameRegex}}])
//   user = user.filter(user => user.username !== req.user.username)

//   res.json({ user })
// })

const createUser = asyncHandler(async (req, res) => {
  let token
  const {
    email,
    password,
    passwordConfirm,
    firstName,
    middleName,
    lastName,
    address,
    type,
    gender,
    birthDate,
    contactNo,
    branches,
    package,
    instructorId
  } = req.body

  if (!email || !password) {
    res.json({ message: "Please input all fields." })
  }

  const userExists = await User.findOne({ email })

  if (userExists) {
    return res.json({ message: "E-mail already taken." })
  }

  if (password !== passwordConfirm) {
    return res.json({ message: "Passwords don't match." })
  }

  salt = await bcrypt.genSalt(10)
  hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
    email,
    password: hashedPassword,
    firstName,
    middleName,
    lastName,
    address,
    type,
    gender,
    birthDate,
    contactNo,
    branches,
    package,
    instructorId
  })

  if (user) {
    return res.json({
      message: "Success",
      id: user._id,
      email,
      token: generateToken(user._id),
    })
  } else {
    return res.json({ message: "Invalid Credentials." })
  }
})

// const updateUser = asyncHandler(async (req, res) => {
//   res.send("Update user")
// })

// const deleteUser = asyncHandler(async (req, res) => {
//   res.send("Delete")
// })

const loginUser = asyncHandler(async (req, res) => {
  data = req.body
  const { email, password } = req.body

  if (!email || !password) {
    return res.json({ message: "Please input all fields." })
  }

  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      message: "Success",
      id: user._id,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    return res.json({ message: "Invalid credentials." })
  }
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" })
}

module.exports = {
  // getUser,
  // searchUser,
  // updateUser,
  // deleteUser,
  createUser,
  loginUser,
}
