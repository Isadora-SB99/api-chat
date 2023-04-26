const salaModel = require('../models/salaModel');

//listar
exports.get = async () => {
    return await salaModel.listarSalas();
}

//entrar
