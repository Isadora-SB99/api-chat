const db = require("./db")

function listarSalas() {
  return db.findAll("salas");
}

//entrar na sala
function entrarSala(idUser, sala){
  return db.updateOne("usuario", db.findById("usuario", usuario.nick), {"nick": nick, "sala": {"idSala": sala.idSala, "sala": sala.nome}});
}

function sairSala(){

}

module.exports = { listarSalas, entrarSala, sairSala }