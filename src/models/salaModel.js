function listarSalas(){
    return [
        {
            "_id": {
              "$oid": "643f222bfb9bd3bddbfe9c57"
            },
            "nome": "Guerreiros da InfoCimol",
            "tipo": "publica"
          }, {
            "_id": {
              "$oid": "643f2272fb9bd3bddbfe9c59"
            },
            "nome": "Só os confirmados da INFO",
            "tipo": "privada",
            "chave": "7dxy5p"
          }, {
            "_id": {
              "$oid": "643f222bfb9bd3bddbfe9c57"
            },
            "nome": "Guerreiros da INFO",
            "tipo": "publico"
          }
    ];
}

module.exports = {listarSalas}