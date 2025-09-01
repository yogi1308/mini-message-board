const express = require('express')
const messages = require('../messges')
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index", { title: "Mini Message board", messages: messages})
})

router.get("/new", (req, res) => {
    res.render("form", {})
})

module.exports = router