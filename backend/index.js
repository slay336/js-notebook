require("dotenv").config()
const express = require("express");
const db = require("./db.js");
const path = require("path");
const app = express();

const PORT = process.env.EXPRESS_PORT || 80;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.use(express.json());
app.use(express.static(path.resolve(`${__dirname}/../dist`)));

app.get("/", (req, res) => {
    return res.sendFile(path.resolve(`${__dirname}/../dist/index.html`));
});

app.get("/notes", async (req, res) => {
    let notes = await db.getNotes();
    res.send(notes);
});

app.post("/delete", async (req, res) => {
    await db.deleteNote(req.body.id);
    const result = await db.getNotes();
    console.log(result);
    return res.send(result);
});

app.post("/add", async (req, res) => {
   await db.addNote(req.body.title, req.body.description);
   return res.send(await db.getNotes());
});

app.post("/alter", async (req, res) => {
    await db.alterNote(req.body.id, req.body.title, req.body.description);
    return res.send(await db.getNotes());
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});