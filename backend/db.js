const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb://localhost:27017/");

async function getNotes() {
    await mongoClient.connect();
    const cursor = await mongoClient.db("js_notebook")
                            .collection("notes")
                            .find();

    return await new Promise((resolve, reject) => {
        cursor.toArray((err, results) => {
            if (err) {
                reject("Something went wrong while getting results")
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
            mongoClient.close()
        });
}

module.exports = {
    getNotes
}