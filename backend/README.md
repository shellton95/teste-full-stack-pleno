# Backend - Laravel API

## Tecnologias

- Laravel Framework 9.52.21
- JWT Auth (tymon/jwt-auth)
- L5 Repository (prettus/l5-repository)

## Instalação

### 1. Instalar dependências

```bash
composer install
```
OBS: geração de chave: php artisan key:generate

### 2. Configurar ambiente

```bash
cp .env.example .env
```

Edite o `.env` com suas configurações de banco de dados.

### 3. Configurar aplicação para criar as tabelas no banco de dados

```bash
php artisan migrate
```

## Como Executar

### Opção 1: PHP Artisan

```bash
php artisan serve
```

### Opção 2: Docker

```bash
docker-compose up
```

Acesse: `http://localhost:8000`
obs: verificar porta de acesso

## Usuário de Teste

```json
{
  "email": "testefull@teste.com",
  "password": "12345678"
}
```

## Endpoints

### Autenticação (público)

- `POST /api/auth/register` - cadastro de usuário.
- `POST /api/auth/login` - login com geração de token JWT.

### Posts (requer autenticação)

- `GET /api/posts` - listagem de posts 
- `GET /api/posts/{id}` - Detalhes de um post
- `POST /api/posts` - Criar post
- `PUT /api/posts/{id}` - Atualizar post
- `DELETE /api/posts/{id}` - Deletar post
