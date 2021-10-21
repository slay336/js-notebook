let express = require("express");
let app = express();

app.get("/", (req, res) => {
    return res.send("Index page")
});

app.get("/notes", (_, res) => {
    let notes = [
        {
            id: 1,
            title: "Title 1",
            description: "Description 1"
        },
        {
            id: 2,
            title: "Title 2",
            description: "Description 2"
        },
        {
            id: 3,
            title: "Title 3",
            description: "Description 3"
        },
        {
            id: 4,
            title: "Title 4",
            description: "Description 4"
        }
    ];
    res.contentType("application/json");
    res.send(notes);
})

app.listen(5001);