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

async function findAll(collection) {
    const db = await connect();
    return db.collection(collection).find().toArray();
}

// async function findOne(collection, {chave:valor}){
//     const db = await connect();
//     return db.collection(collection).findOne({_id:objectId(36734673946739)}).toArray();
// }

async function findById(collection, id){
    const db = await connect();
    return db.collection(collection).findOne({_id:objectId(id)}).toArray();
}

async function insertOne(collection, objeto) {
    const db = await connect();
    return db.collection(collection).insertOne(objeto);
}

async function updateOne(collection, objetoAntigo, objetoNovo){
    const db = await connect();
    return db.collection(collection).updateOne(objetoAntigo, objetoNovo);
}

module.exports = { findAll, findById, insertOne, updateOne }



// username = doadmin
// password = <replace-with-your-password>
// host = mongodb+srv://db-mongodb-nyc1-09935-0581ebb9.mongo.ondigitalocean.com
// database = admin