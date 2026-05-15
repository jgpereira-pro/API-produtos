FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./
COPY apps/api-gateway ./apps/api-gateway

RUN npm install
WORKDIR /app/apps/api-gateway
RUN npm run build

FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/api-gateway/package.json ./apps/api-gateway/
COPY --from=builder /app/apps/api-gateway/dist ./apps/api-gateway/dist

WORKDIR /app/apps/api-gateway
EXPOSE 3000
CMD ["node", "dist/server.js"]