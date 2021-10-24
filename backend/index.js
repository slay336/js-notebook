const express = require("express");
const db = require("./db.js");
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.get("/", (req, res) => {
    return res.send("Index page")
});

app.get("/notes", async (req, res) => {
    let notes = await db.getNotes();
    res.send(notes);
})

app.listen(5001);