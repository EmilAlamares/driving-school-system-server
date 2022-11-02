const express = require("express")
const {loginUser} = require('../controllers/loginController')
const router = express.Router()

// router.route('/')
//     .get(getUser)
//     .post(createUser)
//     .put(updateUser)
//     .delete(deleteUser)

// router.route('/:username')
//     .get(authenticate, searchUser)

router.route('/')
    .post(loginUser)


module.exports = router