const db = require("./db");

async function registrarUsuario(nick) {
    return await db.insertOne("usuario", { "nick": nick });
}

async function getUser(idUser){
    return await db.findById("usuario", idUser);
}

module.exports = { registrarUsuario, getUser }