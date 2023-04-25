const salaModel = require('../models/salaModel');

exports.get = async () => {
    return await salaModel.listarSalas();
    // let salaModel = require('../models/salaModel');
    // return salaModel.listarSalas();
}
