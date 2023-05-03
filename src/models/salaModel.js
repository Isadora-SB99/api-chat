const db = require("./db")

function listarSalas() {
  return db.findAll("salas");
}

//entrar na sala
function entrarSala(){
  return db.insertOne("")
}

module.exports = { listarSalas, entrarSala }