FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./
COPY apps/order-service ./apps/order-service

RUN npm install
WORKDIR /app/apps/order-service
RUN npm run build

FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/order-service/package.json ./apps/order-service/
COPY --from=builder /app/apps/order-service/dist ./apps/order-service/dist

WORKDIR /app/apps/order-service
EXPOSE 3002
CMD ["node", "dist/server.js"]