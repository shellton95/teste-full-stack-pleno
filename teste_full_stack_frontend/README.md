# Frontend - React App

## Tecnologias

- React 19.1.1
- React Router DOM - Gerenciamento de rotas
- Axios - Requisições HTTP
- React Toastify - Notificações
- React Icons - Ícones

## Instalação

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_API_URL=http://localhost:8000/api
```

## Como Executar

### Opção 1: NPM

```bash
npm start
```

### Opção 2: Docker

```bash
docker-compose up
```

Acesse: `http://localhost:3000`
obs: verifique a porta disponivel

## Scripts Disponíveis

```bash
npm start

```

## Funcionalidades

- Autenticação de usuários (Login/Registro)
- CRUD de posts
- Notificações toast
- Rotas protegidas com autenticação