# Use a Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json e pnpm-lock.yaml para instalar dependências
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# Copiar o restante do código
COPY . .

# Expor a porta usada pelo Next.js
EXPOSE 3000

# Comando para rodar o ambiente de desenvolvimento
CMD ["pnpm", "dev"]