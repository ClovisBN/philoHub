const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { userModel } = require("../database/sequelize");

module.exports = (app) => {
  app.post("/api/login", async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
      return res
        .status(400)
        .json({ error: "Le nom d'utilisateur et le mot de passe sont requis" });
    }

    try {
      // Recherche de l'utilisateur dans la base de données
      const user = await userModel.findOne({ where: { name } });
      if (!user) {
        return res
          .status(401)
          .json({ error: "Nom d'utilisateur ou mot de passe incorrect" });
      }

      // Vérification du mot de passe
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res
          .status(401)
          .json({ error: "Nom d'utilisateur ou mot de passe incorrect" });
      }

      // Génération du token JWT
      const token = jwt.sign(
        { userId: user.id, roleId: user.RoleId },
        process.env.JWT_SECRET
      );
      res.json({ token });
    } catch (error) {
      console.error("Erreur lors de la connexion de l'utilisateur:", error);
      res
        .status(500)
        .json({ message: "Erreur lors de la connexion de l'utilisateur" });
    }
  });

  // Inscription d'un nouvel utilisateur
  app.post("/api/signup", async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
      return res
        .status(400)
        .json({ error: "Le nom d'utilisateur et le mot de passe sont requis" });
    }

    try {
      // Vérification si l'utilisateur existe déjà
      const existingUser = await userModel.findOne({ where: { name } });
      if (existingUser) {
        return res.status(400).json({ error: "Nom d'utilisateur déjà pris" });
      }

      // Hachage du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);

      // Création de l'utilisateur dans la base de données
      const newUser = await userModel.create({
        name,
        password: hashedPassword,
      });

      res
        .status(201)
        .json({ message: "Utilisateur créé avec succès", user: newUser });
    } catch (error) {
      console.error("Erreur lors de l'inscription de l'utilisateur:", error);
      res
        .status(500)
        .json({ message: "Erreur lors de l'inscription de l'utilisateur" });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    const { id } = req.params;

    try {
      // Recherche de l'utilisateur dans la base de données par son ID
      const user = await userModel.findByPk(id);

      if (user) {
        // Si l'utilisateur est trouvé, retournez ses informations
        return res.json(user);
      } else {
        // Si l'utilisateur n'est pas trouvé, retournez une erreur 404
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }
    } catch (error) {
      // En cas d'erreur, retournez une erreur 500
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
      return res
        .status(500)
        .json({ error: "Erreur lors de la récupération de l'utilisateur" });
    }
  });
};
