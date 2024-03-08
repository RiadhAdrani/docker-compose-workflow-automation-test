import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { PrismaClient } from '@prisma/client';

(async () => {
  const $prisma = new PrismaClient();

  await $prisma.$connect();

  const app = new Hono().use(cors());

  app.get('/', (c) => {
    return c.text('Hello Hono!');
  });

  const port = 3000;
  console.log(`Server is running on port ${port}`);

  serve({
    fetch: app.fetch,
    port,
  });
})();
