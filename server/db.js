const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.sqlite');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      senha TEXT NOT NULL
    )
  `);
  db.run(`
  CREATE TABLE IF NOT EXISTS coletas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    material TEXT NOT NULL,
    endereco TEXT NOT NULL,
    data TEXT NOT NULL
  )
`);
  db.run(`
  CREATE TABLE IF NOT EXISTS resgates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    beneficio TEXT,
    pontos INTEGER,
    data TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);
db.run(`
  CREATE TABLE IF NOT EXISTS denuncias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT,
    imagem TEXT,
    latitude REAL,
    longitude REAL,
    data TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);
db.run(`
  CREATE TABLE IF NOT EXISTS cooperativas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    endereco TEXT,
    bairro TEXT,
    contato TEXT
  )
`);
db.run(`
  CREATE TABLE IF NOT EXISTS notificacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    mensagem TEXT,
    bairro TEXT,
    data TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);
db.run(`
  CREATE TABLE IF NOT EXISTS resgates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    recompensa TEXT,
    data TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

});

module.exports = db;
