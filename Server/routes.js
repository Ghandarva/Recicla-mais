const express = require('express');
const router = express.Router();
const db = require('./db');

// Rota para cadastrar usuário
router.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  const query = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;

  db.run(query, [nome, email, senha], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(400).json({ error: 'Erro ao cadastrar usuário' });
    }
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', id: this.lastID });
  });
});

module.exports = router;
