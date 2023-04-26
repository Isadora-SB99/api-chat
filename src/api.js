var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (req, res) => {
    res.status(200).send("<h1>API - CHAT</h1>")
}));

app.use("/sobre", router.get("/sobre", (req, res, next) => {
    res.status(200).send({
        "nome": "API - CHAT",
        "versão": "0.1.0",
        "autor": "Isadora"
    })
}));

app.use("/salas", router.get("/salas", (req, res, next) => {
    const salaController = require("./controllers/salaController");
    let resp = salaController.get();
    res.status(200).send(resp);
}));

app.use("/entrar", router.post("/entrar", async (req, res, next) => {
    const usuarioController = require("./controllers/usuarioController");
    let resp = await usuarioController.entrar(req.body.nick);
    res.status(200).send(resp);
}));



//NOVAS ROTAS?

//rota pra entrar na sala //id?
app.use("/sala/entrar", router.get("/sala/entrar", async (req, res, next) => {
    const salaController = require("./controllers/salaController");
    let resp = await salaController.entrar(req.body.mensagem);
    res.status(200).send(resp);

}));

//rota para listar mensagens //timestamp?
app.use("/mensagens/listar", router.get("/mensagens/listar", (req, res, next) => {
    const mensagemController = require("./controllers/mensagemController");
    let resp = mensagemController.get();
    res.status(200).send(resp);
}));

//rota para enviar mensagem


module.exports = app;
