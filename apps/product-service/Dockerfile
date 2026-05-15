# Estágio 1: Builder (Compilação)
FROM node:20-alpine AS builder
WORKDIR /app

# Copia as configurações da raiz do monorepo
COPY package.json package-lock.json tsconfig.json ./
# Copia o código do serviço
COPY apps/product-service ./apps/product-service

# Instala as dependências e compila
RUN npm install
WORKDIR /app/apps/product-service
RUN npm run build

# Estágio 2: Runner (Produção)
FROM node:20-alpine
WORKDIR /app

# Copia os módulos e o código compilado do estágio anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/product-service/package.json ./apps/product-service/
COPY --from=builder /app/apps/product-service/dist ./apps/product-service/dist

WORKDIR /app/apps/product-service
EXPOSE 3001
CMD ["node", "dist/server.js"]