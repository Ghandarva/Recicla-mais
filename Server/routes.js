
const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  const query = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;

  db.run(query, [nome, email, senha], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(400).send('<script>alert("Erro ao cadastrar usuário."); window.history.back();</script>');
    }
    res.redirect('/dashboard.html');  // Redireciona após cadastro
  });
});

router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const query = `SELECT * FROM usuarios WHERE email = ? AND senha = ?`;

  db.get(query, [email, senha], (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('<script>alert("Erro no servidor."); window.history.back();</script>');
    }
    if (row) {
      res.redirect('/dashboard.html');  // Redireciona após login
    } else {
      res.status(401).send('<script>alert("Usuário ou senha inválidos."); window.history.back();</script>');
    }
  });
});
module.exports = router;
