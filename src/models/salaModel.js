const db = require("./db")

function listarSalas() {
  return db.findAll("salas");
}

//entrar na sala

module.exports = { listarSalas }