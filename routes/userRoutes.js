const express = require("express")
const {
  loginUser,
  createUser,
  searchUser,
  getAllUsers
} = require("../controllers/userController")
const router = express.Router()

router.route("/").post(createUser).get(getAllUsers)
//     .put(updateUser)
//     .delete(deleteUser)

router.route("/:id").get(searchUser)

router.route("/login").post(loginUser)

module.exports = router
