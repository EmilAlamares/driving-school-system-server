const express = require("express")
const { loginUser, createUser } = require("../controllers/userController")
const router = express.Router()

router.route("/").post(createUser)
//     .get(getUser)
//     .put(updateUser)
//     .delete(deleteUser)

// router.route('/:username')
//     .get(authenticate, searchUser)

router.route("/login").post(loginUser)

module.exports = router
