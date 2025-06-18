
# ♻️ Recicla+ - Plataforma de Apoio à Reciclagem

## 🌍 Descrição

**Recicla+** é uma aplicação web voltada à conscientização e incentivo da reciclagem na Zona Leste de São Paulo. O sistema conecta moradores, catadores, cooperativas e pontos de coleta, promovendo sustentabilidade por meio da tecnologia e gamificação.

Usuários podem se cadastrar, visualizar pontos de coleta, solicitar coletas, denunciar descarte irregular, acompanhar suas pontuações e interagir com a comunidade de forma prática e segura.

---

## 📌 Funcionalidades

- ✅ Cadastro de usuários com aceite dos Termos de Uso e Política de Privacidade
- ✅ Login seguro com senha criptografada e redirecionamento para dashboard
- ✅ Dashboard com:
  - ✔️ Solicitar coleta
  - ✔️ Acompanhar pedidos
  - ✔️ Ver pontos de coleta na região (Google Maps)
  - ✔️ Contato com catadores
  - ✔️ Sistema de pontos e ranking
  - ✔️ Resgate de pontos com histórico
  - ✔️ Denúncias com foto e localização
  - ✔️ Educação ambiental
  - ✔️ Notificações por bairro/evento
- ✅ Painel administrativo com:
  - ✔️ Cadastro de cooperativas e ecopontos
  - ✔️ Envio de notificações
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
│   ├── denunciar.html
│   ├── sistema-de-pontos.html
│   ├── ranking.html
│   ├── historico-resgates.html
│   ├── painel-admin.html
│   ├── painel-notificacoes.html
│   ├── notificacoes.html
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
2. Rode `npm install` (se for usar em ambiente Node.js)
3. Execute com `npm start` ou use `Recicla-mais-win.exe`
4. Acesse `http://localhost:3000` no navegador

---

## 🗄️ Banco de Dados

O projeto utiliza SQLite. Tabelas principais:

- `usuarios`
- `coletas`
- `resgates`
- `notificacoes`
- `denuncias`
- `cooperativas`

Scripts disponíveis:

- `db.js`: cria automaticamente todas as tabelas ao iniciar

---

## 💻 Scripts Automatizados (.bat)

- ✔️ `GitPull.bat`: Atualiza o projeto com `pull`
- ✔️ `GitOverride.bat`: Força o envio com `push -f`

---

## 🏆 Tecnologias utilizadas

- Node.js + Express
- SQLite
- bcryptjs
- HTML, CSS, Bootstrap, Tailwind CSS
- Google Maps API
- pkg (para gerar `.exe`)
- multer (upload de imagens)

---

## 🔒 Segurança

- ✔️ Senhas fortes com hash (bcrypt)
- ✔️ Dados de denúncias e notificações protegidos
- ✔️ Consentimento exigido via Termos de Uso (LGPD)

---

## 📊 Funcionalidades Recentes

- 📌 Sistema de Denúncias com imagem + localização
- 📌 Ranking de pontos por usuário
- 📌 Resgate e histórico de recompensas
- 📌 Notificações segmentadas por bairro
- 📌 Painel admin para cadastrar cooperativas
- 📌 Página de educação ambiental

---

## 👥 Acessibilidade & Responsividade

- Layout adaptável com Tailwind e Bootstrap
- Imagens com `alt`
- Labels e campos com `aria`
- Navegação por teclado (foco visível)

---

## 💬 Contato

Projeto acadêmico | Desenvolvido por [Seu Nome]
