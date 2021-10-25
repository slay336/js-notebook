const {ObjectId} = require("mongodb");
const MongoClient = require("mongodb").MongoClient;

async function getNotes() {
    const mongoClient = await new MongoClient("mongodb://localhost:27017/").connect();
    const cursor = await mongoClient.db("js_notebook")
                            .collection("notes")
                            .find();

    return await new Promise((resolve, reject) => {
        cursor.toArray((err, results) => {
            if (err) {
                reject(err)
            }
            resolve(results);
        })
    })
        .then(resolve => resolve)
        .catch(err => {
            console.log(err);
            return [];
        })
        .finally(() => {
            mongoClient.close();
        });
}

async function deleteNote(noteId) {
    const mongoClient = await new MongoClient("mongodb://localhost:27017/").connect();
    mongoClient.db("js_notebook").collection("notes").deleteOne({ _id: new ObjectId(noteId) })
        .catch(reject => {
           console.log(reject)
        })
        .finally(() => {
            mongoClient.close();
        });
}

async function addNote(title, description) {
    const mongoClient = await new MongoClient("mongodb://localhost:27017/").connect();
    const result = await mongoClient.db("js_notebook").collection("notes").insertOne({
        title,
        description
    });
    await mongoClient.close();
    return result;
}

module.exports = {
    getNotes,
    deleteNote,
    addNote
}