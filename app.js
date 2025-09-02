const express = require("express")
const path = require("node:path");

const app = express()
app.use(logger)
app.use(express.urlencoded({extended: true}))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = process.env.PORT || 3000;
app.listen(PORT, error => {
    if (error) {throw error}
    console.log(`server started on ${PORT}`)
})

const indexRouter = require('./routes/index')

app.use("/", indexRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}