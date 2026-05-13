import Fastify from 'fastify';

// Interface auxiliar apenas para tipar o retorno do fetch
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

// Interface Order atualizada
interface Order {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  total: number;
  createdAt: string;
}

const app = Fastify();

const orders: Order[] = [];
let nextId = 1;

const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL || 'http://localhost:3001';

app.get('/orders', async () => {
  return orders;
});

// A rota agora espera productId e quantity
app.post<{ Body: { productId: number, quantity: number } }>('/orders', async (request, reply) => {
  const { productId, quantity } = request.body;

  if (!productId || !quantity) {
    return reply.status(400).send({ message: 'Product ID e quantity são obrigatórios' });
  }

  // 1. A chamada HTTP usando fetch nativo
  const response = await fetch(`${PRODUCT_SERVICE_URL}/products/${productId}`);

  // 2. Tratamento de 404 propagando o erro
  if (!response.ok) {
    return reply.status(404).send({ error: 'Produto não encontrado no Product Service' });
  }

  // Parse do JSON tipado com a interface Product
  const product = await response.json() as Product;

  // 3  . Pedido enriquecido com cálculo do total
  const order: Order = {
    id: nextId++,
    productId,
    productName: product.name,
    quantity,
    total: product.price * quantity,
    createdAt: new Date().toISOString(),
  };

  orders.push(order);
  return reply.status(201).send(order);
});

app.listen({ port: 3002, host: '0.0.0.0' }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Order Service running on http://localhost:3002');
});
