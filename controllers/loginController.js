// const User = require("../models/userModel")
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

// const createUser = asyncHandler(async (req, res) => {
//   let token
//   const { username, password, passwordConfirm } = req.body

//   if (!username || !password || !passwordConfirm) {
//     res.json({ message: "Please input all fields." })
//   }

//   const userExists = await User.findOne({ username })

//   if (userExists) {
//     res.json({ message: "Username already taken." })
//   }

//   if (password !== passwordConfirm) {
//     res.json({ message: "Passwords don't match." })
//   }

//   salt = await bcrypt.genSalt(10)
//   hashedPassword = await bcrypt.hash(password, salt)

//   const user = await User.create({
//     username,
//     password: hashedPassword,
//   })

//   if (user) {
//     res.json({
//       message: "Success",
//       id: user._id,
//       username,
//       token: generateToken(user._id),
//     })
//   } else {
//     res.json({ message: "Invalid Credentials." })
//   }
// })

// const updateUser = asyncHandler(async (req, res) => {
//   res.send("Update user")
// })

// const deleteUser = asyncHandler(async (req, res) => {
//   res.send("Delete")
// })

const loginUser = asyncHandler(async (req, res) => {
    data = req.body
//   const { username, password } = req.body

//   if (!username || !password) {
//     res.json({ message: "Please input all fields." })
//   }

//   const user = await User.findOne({ username })

//   if (user && (await bcrypt.compare(password, user.password))) {
//     res.json({
//       message: "Success",
//       id: user._id,
//       username: user.username,
//       token: generateToken(user._id),
//     })
//   } else {
//     res.json({ message: "Invalid credentials." })
//   }

    res.send(data)
    // res.json({message: 'Logged in.'})
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" })
}

module.exports = {
//   getUser,
//   searchUser,
//   updateUser,
//   createUser,
//   deleteUser,
  loginUser,
}