const Express = require("express");
const path = require("path");
const app = Express();
const router = Express.Router();
const { google } = require("googleapis");

app.use(Express.static(path.join(__dirname, "Menu")));
app.use(Express.json());

router.get("/", (req, res) => {
  const indexPath = path.resolve(__dirname, "Menu", "index.html");
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro interno no servidor");
    }
  });
});

router.get("Presentes/index.html", (req, res) => {
  const contatoPath = path.resolve(__dirname, "Menu", "index1.html");
  res.sendFile(contatoPath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro interno no servidor");
    }
  });
});

async function getAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({
    version: "v4",
    auth: client,
  });

  const spreadsheetId = "1Td-3lXLoZAfAUpDvDmHL8K87ZHdwGgYcJ5Ix36k7_Og";

  return {
    auth,
    client,
    googleSheets,
    spreadsheetId,
  };
}

app.post("/addRow", async (req, res) => {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

  const { values } = req.body;

  const row = await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Página1",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: values,
    },
  });
  res.send(row.data);
});

// app.post("/#", async);
app.use(router);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8800;
}

app.listen(port, () => {
  console.log("Servidor rodando");
});
