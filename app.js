const express = require("express")
const path = require("node:path");

const app = express()
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, error => {
    if (error) {throw error}
    console.log(`server started on ${PORT}`)
})

const indexRouter = require('./routes/index')

app.use("/", indexRouter)