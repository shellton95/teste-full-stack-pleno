FROM node:20-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o restante do projeto
COPY . .

# Exponha a porta que o React vai usar
EXPOSE 3000

# Comando para rodar o projeto
CMD ["npm", "start"]
