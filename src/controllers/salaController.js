const salaModel = require('../models/salaModel');

//listar
exports.get = async () => {
    return await salaModel.listarSalas();
}

//entrar
exports.post = async() => {
    return await salaModel.entrarSala();
}
