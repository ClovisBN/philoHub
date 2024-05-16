const express = require("express");
const cors = require("cors");
const { runDb } = require("./database/sequelize");

const bodyParser = require("body-parser");

// Initialisation de l'application Express
const app = express();
const PORT = process.env.PORT || 8000;

// Configuration CORS avec les options spécifiées
const corsOptions = {
  origin: "http://localhost:8001",
  methods: ["GET", "POST", "DELET", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

runDb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/UserController")(app);

app.get("/", (req, res) => {
  res.send("Hello boy!");
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
