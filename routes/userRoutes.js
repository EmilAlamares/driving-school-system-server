const express = require("express")
const {
  loginUser,
  createUser,
  searchUser,
  getAllUsers,
  updateUser
} = require("../controllers/userController")
const router = express.Router()

router.route("/").post(createUser).get(getAllUsers)
//     .put(updateUser)
//     .delete(deleteUser)

router.route("/:id").get(searchUser)

router.route("/login").post(loginUser)

router.route("/update").put(updateUser)

module.exports = router
