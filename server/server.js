const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(process.cwd(), 'public')));

// Rota explícita para dashboard
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'dashboard.html'));
});

// Rotas principais
app.use('/api', routes); // ✅ AGORA COM /api CORRETAMENTE

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
