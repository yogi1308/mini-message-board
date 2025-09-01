const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000;
app.listen(PORT, error => {
    if (error) {throw error}
    console.log(`server started on ${PORT}`)
})


app.get("/", (req, res) => {res.send("Hello, World")})