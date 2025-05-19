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
- (Opcional) [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para visualização local

### 🚀 Clonando o repositório

```bash
git clone https://github.com/Ghandarva/Recicla-mais.git
cd Recicla-mais
```

### 💻 Executando localmente

Como o projeto está baseado em HTML/CSS e JS puro:

1. Navegue até o diretório do projeto
2. Abra o arquivo `index.html` no navegador
3. Ou, se preferir, use o Live Server (VS Code)

```bash
# Se estiver usando VS Code:
code .
# Clique com o botão direito no index.html > Open with Live Server
```

---

## 🗄️ Banco de Dados

### Estrutura

O projeto utiliza um banco de dados relacional com MySQL. A estrutura básica inclui:

- **usuarios** – Cadastro de usuários
- **pedidos_coleta** – Solicitações de coleta agendadas

Scripts disponíveis na pasta `database/`:

- `schema.sql`: cria todas as tabelas principais.
- `seed.sql`: insere dados iniciais (opcional).
- `migrations/`: contém scripts incrementais com histórico de alterações.

### 💾 Configuração do banco

1. Crie um banco de dados no MySQL:

```sql
CREATE DATABASE reciclamais;
```

2. Execute o script `schema.sql`:

```bash
mysql -u seu_usuario -p reciclamais < database/schema.sql
```

3. (Opcional) Popular com dados de exemplo:

```bash
mysql -u seu_usuario -p reciclamais < database/seed.sql
```

---
