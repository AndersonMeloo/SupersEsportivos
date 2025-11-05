🚗 ## SupersEsportivos — Catálogo de Carros

Aplicação Full Stack inspirada na Webmotors, desenvolvida com React, Node.js (Fastify), Prisma e MongoDB.
O sistema permite cadastrar, listar e excluir carros, salvando as informações (marca, modelo, categoria, imagem, preço, etc.) diretamente no banco de dados.

🚀 Tecnologias Utilizadas

🖥️ Front-end
- React
- TypeScript
- Axios (para comunicação com a API)

⚙️ Back-end
- Node.js
- Fastify
- TypeScript
- Prisma ORM
- MongoDB
- CORS / Dotenv

🧩 Funcionalidades

✅ Cadastro de carros — envia dados como marca, modelo, descrição, local, ano/km e imagem
✅ Listagem de carros cadastrados — exibe todos os carros salvos no banco de dados
✅ Remoção de carros — exclusão direta pelo ID
✅ Integração completa entre front e back via API Fastify
✅ Banco de dados MongoDB gerenciado com Prisma ORM

📦 Como Rodar o Projeto
```bash
# Acessar pasta backend
cd backend

# Instalar dependências
npm install

# Gerar cliente Prisma
npx prisma generate

# Rodar servidor
npm run dev
```

💻 Frontend
```bash
# Acessar pasta frontend
cd frontend

# Instalar dependências
npm install

# Rodar projeto React
npm run dev
```
