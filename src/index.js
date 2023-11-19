const Express = require("express");
const path = require("path");
const app = Express();
const router = Express.Router();

app.use(Express.static(path.join(__dirname, "Menu")));

router.get("/", (req, res) => {
  const indexPath = path.resolve(__dirname, "Menu", "index.html");
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro interno no servidor");
    }
  });
});

router.get("/presentes/", (req, res) => {
  const contatoPath = path.resolve(
    __dirname,
    "Menu",
    "Presentes",
    "index.html"
  );
  res.sendFile(contatoPath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro interno no servidor");
    }
  });
});

app.use(router);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, () => {
  console.log("Servidor rodando");
});
