const express = require('express')
const messages = require('../messges')
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index", { title: "Mini Message board", messages: messages})
})

router.get("/new", (req, res) => {
    res.render("form")
})

router.post("/new", (req, res) => {
    let isValid
    req.body.text.trim() !== "" && req.body.user.trim() !== "" ? isValid = true : isValid = false
    if (isValid) {
        messages.push({text: req.body.text.trim(), user: req.body.user.trim(), added: new Date(), userMessage: true});
        res.redirect("/");
    } else {
        res.render("form", {text: req.body.text.trim(), user: req.body.user.trim()});
    }
})

// dynamic routes

router.get("/user/:id", (req, res) => {
    res.send(`Getting a user with id ${req.params.id}`)
})

module.exports = router