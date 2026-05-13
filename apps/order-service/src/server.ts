import Fastify from 'fastify';

interface Order {
  id: number;
  productId: number;
}

const app = Fastify();

const orders: Order[] = [];

app.get('/orders', async () => {
  return orders;
});

app.post<{ Body: { productId: number } }>('/orders', async (request, reply) => {
  const { productId } = request.body;
  
  if (!productId) {
    return reply.status(400).send({ message: 'Product ID is required' });
  }

  const newOrder: Order = {
    id: orders.length + 1,
    productId,
  };

  orders.push(newOrder);
  return reply.status(201).send(newOrder);
});

app.listen({ port: 3002, host: '0.0.0.0' }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Order Service running on http://localhost:3002');
});