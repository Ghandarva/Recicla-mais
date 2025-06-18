const express = require('express');
const router = express.Router();
const db = require('./db');
const bcrypt = require('bcryptjs');
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

  const hash = bcrypt.hashSync(senha, saltRounds);

  const query = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
  db.run(query, [nome, email, hash], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(400).send('<script>alert("Erro ao cadastrar usuário."); window.history.back();</script>');
    }
    res.send(`
      <script>
        alert('Cadastro realizado com sucesso!');
        window.location.href = '/dashboard.html';
      </script>
    `);
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

    const result = bcrypt.compareSync(senha, row.senha);

    if (result) {
      res.send(`
        <script>
          alert('Login realizado com sucesso!');
          window.location.href = '/dashboard.html';
        </script>
      `);
    } else {
      res.status(401).send('<script>alert("Senha incorreta."); window.history.back();</script>');
    }
  });
});
router.post('/solicitar-coleta', (req, res) => {
  const { material, endereco, data } = req.body;

  const query = `INSERT INTO coletas (material, endereco, data) VALUES (?, ?, ?)`;

  db.run(query, [material, endereco, data], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ sucesso: false, mensagem: 'Erro ao salvar no banco de dados.' });
    }

    res.status(200).json({ sucesso: true, mensagem: 'Solicitação registrada com sucesso!' });
  });
});
router.get('/coletas', (req, res) => {
  db.all('SELECT * FROM coletas ORDER BY data DESC', (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json([]);
    }
    res.json(rows);
  });
});
router.get('/pontos', (req, res) => {
  const query = 'SELECT COUNT(*) AS total FROM coletas';
  db.get(query, [], (err, row) => {
    if (err) {
      console.error(err.message);
      return res.json({ total: 0 });
    }
    // Exemplo: cada coleta = 10 pontos
    const pontos = (row.total || 0) * 10;
    res.json({ total: pontos });
  });
});
router.post('/resgatar', (req, res) => {
  const { id, nome, custo } = req.body;

  const query = `INSERT INTO resgates (beneficio, pontos) VALUES (?, ?)`;
  db.run(query, [nome, custo], (err) => {
    if (err) {
      console.error("Erro ao registrar resgate:", err.message);
      return res.status(500).json({ erro: 'Erro ao salvar resgate no banco de dados.' });
    }

    res.status(200).json({ mensagem: 'Resgate registrado com sucesso.' });
  });
});
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // pasta onde imagens serão salvas

router.post('/denuncia', upload.single('imagem'), (req, res) => {
  const { descricao, latitude, longitude } = req.body;
  const imagem = req.file ? req.file.filename : null;

  const query = `
    INSERT INTO denuncias (descricao, imagem, latitude, longitude)
    VALUES (?, ?, ?, ?)
  `;

  db.run(query, [descricao, imagem, latitude, longitude], (err) => {
    if (err) {
      console.error("Erro ao salvar denúncia:", err.message);
      return res.status(500).send("Erro ao salvar denúncia.");
    }
    res.status(200).send("Denúncia registrada com sucesso.");
  });
});
router.get('/ranking', (req, res) => {
  const query = `
    SELECT u.nome, COUNT(c.id) * 10 AS pontos
    FROM usuarios u
    LEFT JOIN coletas c ON u.email = c.email
    GROUP BY u.nome
    ORDER BY pontos DESC
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Erro no ranking:", err.message);
      return res.status(500).json([]);
    }
    res.json(rows);
  });
});
router.post('/cooperativas', (req, res) => {
  const { nome, endereco, bairro, contato } = req.body;
  const query = `INSERT INTO cooperativas (nome, endereco, bairro, contato) VALUES (?, ?, ?, ?)`;
  db.run(query, [nome, endereco, bairro, contato], (err) => {
    if (err) {
      console.error("Erro ao inserir cooperativa:", err.message);
      return res.status(500).send("Erro ao salvar cooperativa.");
    }
    res.status(200).send("Cooperativa salva.");
  });
});
router.post('/notificacoes', (req, res) => {
  const { titulo, mensagem, bairro } = req.body;
  const query = `INSERT INTO notificacoes (titulo, mensagem, bairro) VALUES (?, ?, ?)`;

  db.run(query, [titulo, mensagem, bairro], (err) => {
    if (err) {
      console.error("Erro ao salvar notificação:", err.message);
      return res.status(500).send("Erro ao salvar notificação.");
    }
    res.status(200).send("Notificação enviada.");
  });
});
router.get('/notificacoes/:bairro', (req, res) => {
  const bairro = req.params.bairro;
  const query = `SELECT * FROM notificacoes WHERE bairro = ? OR bairro = 'Todos' ORDER BY data DESC`;

  db.all(query, [bairro], (err, rows) => {
    if (err) {
      console.error("Erro ao buscar notificações:", err.message);
      return res.status(500).json([]);
    }
    res.json(rows);
  });
});
// Histórico de resgates por e-mail
router.get('/resgates/:email', (req, res) => {
  const email = req.params.email;

  const query = `
    SELECT recompensa, data
    FROM resgates
    WHERE email = ?
    ORDER BY data DESC
  `;

  db.all(query, [email], (err, rows) => {
    if (err) {
      console.error("Erro ao buscar histórico de resgates:", err.message);
      return res.status(500).json({ erro: "Erro no servidor" });
    }

    res.json(rows);
  });
});

module.exports = router;
