const db = require("./db");

function listarMensagens() {
    return db.findAll("mensagens");
}

async function enviarMensagem(mensagem) {
    return await db.insertOne("mensagem", { "mensagem": mensagem });
}

module.exports = { listarMensagens, enviarMensagem }