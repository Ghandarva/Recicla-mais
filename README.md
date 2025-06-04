# ♻️ Recicla+ - Plataforma de Apoio à Reciclagem

## 🌍 Descrição

**Recicla+** é uma aplicação web voltada à conscientização e incentivo da reciclagem na Zona Leste de São Paulo. O sistema conecta moradores, catadores e pontos de coleta, promovendo sustentabilidade por meio da tecnologia.

Usuários podem se cadastrar, fazer login, visualizar pontos de coleta próximos, acompanhar sua pontuação por ações sustentáveis e até contatar catadores de forma direta.

---

## 📌 Funcionalidades

- ✅ Cadastro e Login de usuários
- ✅ Visualização dos pontos de coleta na região
- ✅ Sistema de pontuação por participação
- ✅ Contato com catadores locais
- ✅ Interface moderna e responsiva
- ✅ Animações e ícones interativos

---

## 🧰 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Básico)**
- **Bootstrap 5**
- **AOS (Animate on Scroll)**
- **Font Awesome (Ícones)**

---
## 📦 Instalação e Uso

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [MySQL](https://www.mysql.com/) ou outro SGBD compatível

### 💻 Executando localmente

1. Extraia o arquivo em C:/Users/(SeuUsuário)

2. Navegue até o diretório do projeto:
```bash
cd (NomeDoArquivo)
```
3. Instale as dependências:
```bash
npm install
```
5. Inicie o servidor:
```bash
npm start
```
6. Acesse o sistema via [http://localhost:3000](http://localhost:3000)


---

## 🗄️ Banco de Dados

### Estrutura

O projeto utiliza um banco de dados relacional com SQLite. A estrutura básica inclui:

- **usuarios** – Cadastro de usuários

Scripts disponíveis:

- `db.js`: cria a estrutura do banco com a tabela de usuários automaticamente ao iniciar.
- Os dados são persistidos no arquivo `database.sqlite`.

---

