const express = require("express")
const {loginUser, createUser} = require('../controllers/loginController')
const router = express.Router()

// router.route('/')
//     .get(getUser)
//     .post(createUser)
//     .put(updateUser)
//     .delete(deleteUser)

// router.route('/:username')
//     .get(authenticate, searchUser)

router.route('/')
    // .post(createUser)
    .post(loginUser)


module.exports = router