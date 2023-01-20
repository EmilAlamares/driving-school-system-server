const express = require("express")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")
const branchRoutes = require("./routes/branchRoutes")
const sessionRoutes = require("./routes/sessionRoutes")
require("dotenv").config()
const { connectDatabase } = require("./config/database")
const app = express()
const PORT = process.env.PORT
const upload = require("express-fileupload")

connectDatabase()

app.use(express.json())
app.use(express.urlencoded({ extended: false, limit: "5mb" }))
app.use(cors())

app.use(upload())

app.use("/users", userRoutes)
app.use("/branches", branchRoutes)
app.use("/sessions", sessionRoutes)


const server = require("http").createServer(app)

server.listen(PORT || 8000, () => console.log(`Listening on PORT: ${PORT}`))
