const express = require("express")
const {
  createSession,
  getSessions,
  getAllSessions,
  updateEvaluation,
  searchSession
} = require("../controllers/sessionController")

const router = express.Router()

router.route("/").post(createSession).get(getAllSessions)
    // .put(updateUser)
//     .delete(deleteUser)

router.route("/evaluations/:id").post(updateEvaluation).get(searchSession)
router.route("/:branch").get(getSessions)
//     .get(authenticate, searchUser)

module.exports = router
