import Fastify from 'fastify';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const app = Fastify();

const products: Product[] = [
  { id: 1, name: 'Notebook Pro', price: 3500, stock: 10 },
  { id: 2, name: 'Mouse Gamer', price: 250, stock: 50 },
  { id: 3, name: 'Teclado Mecânico', price: 400, stock: 30 },
];

app.get('/products', async () => {
  return products;
});

app.get<{ Params: { id: string } }>('/products/:id', async (request, reply) => {
  const product = products.find((p) => p.id === Number(request.params.id));
  if (!product) {
    return reply.status(404).send({ message: 'Product not found' });
  }
  return product;
});

app.listen({ port: 3001, host: '0.0.0.0' }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Product Service running on http://localhost:3001');
});
