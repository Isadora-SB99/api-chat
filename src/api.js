var express = require("express");
var app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (req,res)=>{
    res.status(200).send("<h1>API - CHAT</h1>")
}));

app.use("/", router.get("/sobre", (req, res, next) => {
    res.status(200).send({
        "nome":"API - CHAT",
        "versão":"0.1.0",
        "autor":"Isadora"
    })
}));

app.use("/", router.get("/salas/listar", (req, res, next) => {
    res.status(200).send({
        //devolve a lista das salas, puxando do banco de dados
        // "nome":"nome da sala",
        // "tipo":"tipo da sala"
    })
}));

// app.use("/", router.get("/entrar", (req, res, next) => {
//     res.status(200).send({
//         "nick":"nickname",
//         "cor":"#0F0F0F"
//     })
// }));

module.exports=app;
