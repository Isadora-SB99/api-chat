const salaModel = require('../models/salaModel');
const usuarioModel = require('../models/usuarioModel');

//listar
exports.get = async () => {
    return await salaModel.listarSalas();
}

//entrar (put?)
exports.entrar = async(idUser) => {
    let user = usuarioModel.getUser(idUser);
    return await salaModel.entrarSala(user, sala);
}
