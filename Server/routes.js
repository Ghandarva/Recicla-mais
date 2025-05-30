const express = require('express');
const router = express.Router();
const db = require('./db');
const bcrypt = require('bcrypt');
const saltRounds = 10;


function validarSenha(senha) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  return regex.test(senha);
}

router.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!validarSenha(senha)) {
    return res.send('<script>alert("Senha fraca. A senha deve ter no mínimo 6 caracteres, com pelo menos uma letra maiúscula, uma letra minúscula e um número."); window.history.back();</script>');
  }

  bcrypt.hash(senha, saltRounds, (err, hash) => {
    if (err) {
      console.error(err);
      return res.status(500).send('<script>alert("Erro ao gerar hash da senha."); window.history.back();</script>');
    }

    const query = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
    db.run(query, [nome, email, hash], function(err) {
      if (err) {
        console.error(err.message);
        return res.status(400).send('<script>alert("Erro ao cadastrar usuário."); window.history.back();</script>');
      }
      res.redirect('/dashboard.html');
    });
  });
});


router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const query = `SELECT * FROM usuarios WHERE email = ?`;

  db.get(query, [email], (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('<script>alert("Erro no servidor."); window.history.back();</script>');
    }

    if (!row) {
      return res.status(401).send('<script>alert("Usuário não encontrado."); window.history.back();</script>');
    }

    bcrypt.compare(senha, row.senha, (err, result) => {
      if (result) {
        res.redirect('/dashboard.html');
      } else {
        res.status(401).send('<script>alert("Senha incorreta."); window.history.back();</script>');
      }
    });
  });
});

module.exports = router;
