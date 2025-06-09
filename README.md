# ♻️ Recicla+ - Plataforma de Apoio à Reciclagem

# ♻️ Recicla+ - Plataforma de Apoio à Reciclagem

## 🌍 Descrição

**Recicla+** é uma aplicação web voltada à conscientização e incentivo da reciclagem na Zona Leste de São Paulo. O sistema conecta moradores, catadores e pontos de coleta, promovendo sustentabilidade por meio da tecnologia.

Usuários podem se cadastrar, fazer login, visualizar pontos de coleta próximos, acompanhar sua pontuação por ações sustentáveis e até contatar catadores de forma direta.

---

## 📌 Funcionalidades

- ✅ Cadastro de usuários
- ✅ Login com validação de senha
- ✅ Redirecionamento para Dashboard após login
- ✅ Dashboard com:
  - ✔️ Solicitar coleta
  - ✔️ Ver pontos de coleta
  - ✔️ Contato com catadores
  - ✔️ Sistema de pontos
  - ✔️ Educação ambiental
- ✅ Banco de dados local em SQLite
- ✅ Versão em executável (.exe) para Windows

---

## 🗂️ Estrutura de Pastas

```
Recicla-mais/
│
├── public/                # Arquivos estáticos (HTML, CSS, imagens)
│   ├── index.html
│   ├── dashboard.html
│   ├── solicitar-coleta.html
│
├── server/                # Código backend
│   ├── server.js
│   ├── routes.js
│   ├── db.js
│
├── database.sqlite        # Banco de dados local
├── package.json           # Configurações e dependências Node.js
├── Recicla-mais-win.exe   # Executável do projeto (opcional)
├── README.md              # Este arquivo
```


---
## 📦 Instalação e Uso


### 💻 Executando localmente

1. Extraia o arquivo

2. Lançe o executavel
3. Acesse Localhost 3000
---

## 🗄️ Banco de Dados

### Estrutura

O projeto utiliza um banco de dados relacional com SQLite. A estrutura básica inclui:

- **usuarios** – Cadastro de usuários

Scripts disponíveis:

- `db.js`: cria a estrutura do banco com a tabela de usuários automaticamente ao iniciar.
- Os dados são persistidos no arquivo `database.sqlite`.

---
## 💻 Scripts Automatizados (.bat)

- ✔️ Envio normal com pull (`GitPull.bat`)
- ✔️ Envio forçado (`GitOverride.bat`)

Esses scripts automatizam o envio do projeto para o GitHub via terminal. Porém com uma mensagem de commit básica

---
## 🏆 Tecnologias utilizadas

- Node.js
- Express.js
- SQLite
- bcryptjs (para criptografia de senha)
- HTML, CSS, Bootstrap e Tailwind
- pkg (para gerar o executável)

---
## 🔒 Segurança

- ✔️ Validação de senha forte (mínimo 6 caracteres, 1 maiúscula, 1 minúscula e 1 número).
- ✔️ Senhas armazenadas com hash (`bcryptjs`).

---