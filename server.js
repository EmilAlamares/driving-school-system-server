const express = require("express")
const cors = require("cors")
const loginRoutes = require("./routes/loginRoutes")
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

app.use("/login", loginRoutes)
// app.use("/conversations", conversationRoutes)
// app.use("/messages", messageRoutes)
// app.use("/home", homeRoutes)
// app.use('/image', imageRoutes)

const server = require("http").createServer(app)

server.listen(PORT || 8000, () => console.log(`Listening on PORT: ${PORT}`))
