const {ObjectId} = require("mongodb");
const MongoClient = require("mongodb").MongoClient;

const dbURI = `mongodb://localhost:${process.env.MONGO_PORT || 27017}`;

async function getNotes() {
    const mongoClient = await new MongoClient(dbURI).connect();
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
    const mongoClient = await new MongoClient(dbURI).connect();
    mongoClient.db("js_notebook").collection("notes").deleteOne({ _id: new ObjectId(noteId) })
        .catch(reject => {
           console.log(reject)
        })
        .finally(() => {
            mongoClient.close();
        });
}

async function addNote(title, description) {
    const mongoClient = await new MongoClient(dbURI).connect();
    mongoClient.db("js_notebook").collection("notes").insertOne({
        title,
        description
    })
        .catch(reject => {
            console.log(reject)
        })
        .finally(() => {
            mongoClient.close();
        });
}

async function alterNote(id, title, description) {
    const mongoClient = await new MongoClient(dbURI).connect();
    mongoClient.db("js_notebook").collection("notes")
        .updateOne({ _id: ObjectId(id)},
            {
                $set: {
                    title,
                    description
                }
            })
        .catch(reject => {
            console.log(reject);
        })
        .finally(() => {
            mongoClient.close();
        });
}

module.exports = {
    getNotes,
    deleteNote,
    addNote,
    alterNote
}