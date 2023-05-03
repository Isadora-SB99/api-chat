//conexao node mongodb digitalocean
// alterar código para envolver ^

const { MongoClient, ObjectId } = require("mongodb");

let singleton;

async function connect() {
    if (singleton) return singleton;

    const client = new MongoClient(process.env.DB_HOST);
    await client.connect();

    singleton = client.db(process.env.DB_DATABASE);
    return singleton;
}

async function findAll(colection) {
    const db = await connect();
    return db.collection(colection).find().toArray();
}

async function insertOne(collection, objeto) {
    const db = await connect();
    return db.collection(collection).insertOne(objeto);
}

module.exports = { findAll, insertOne }



// username = doadmin
// password = <replace-with-your-password>
// host = mongodb+srv://db-mongodb-nyc1-09935-0581ebb9.mongo.ondigitalocean.com
// database = admin