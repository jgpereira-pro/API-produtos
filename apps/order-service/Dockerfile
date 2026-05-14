# Estágio 1: Builder (Compilação)
FROM node:18-alpine AS builder
WORKDIR /app

# Copia as configurações da raiz do monorepo
COPY package.json package-lock.json tsconfig.json ./
# Copia o código do serviço
COPY apps/order-service ./apps/order-service

# Instala as dependências e compila
RUN npm install
WORKDIR /app/apps/order-service
RUN npm run build

# Estágio 2: Runner (Produção)
FROM node:18-alpine
WORKDIR /app

# Copia os módulos e o código compilado do estágio anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/order-service/package.json ./apps/order-service/
COPY --from=builder /app/apps/order-service/dist ./apps/order-service/dist

WORKDIR /app/apps/order-service
EXPOSE 3002
CMD ["node", "dist/server.js"]