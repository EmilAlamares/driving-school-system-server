const express = require("express")
const { createBranch, getBranchUsers, getBranch } = require("../controllers/branchController")
const router = express.Router()

router.route("/")
        .post(createBranch)
        .get(getBranch)
//     .put(updateUser)
//     .delete(deleteUser)

router.route("/:branch/:type").get(getBranchUsers)

// router.route("/login").post(loginUser)

module.exports = router
