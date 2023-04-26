const mensagemModel = require('../models/mensagemModel');

//listar
exports.get = async() => {
    return await mensagemModel.listarMensagens();
}

//enviar
exports.enviar = async (nick, mensagem) => {
    let resp = await mensagemModel.enviarMensagem(nick, mensagem);
    if(resp.insertedId){
        return {
            "nick": nick,
            "mensagem":mensagem
        }
    }
}