import axios from 'axios';
import { expect, it } from 'vitest';

it('should ping server (fetch)', async () => {
  const response = await fetch('http://localhost:3000');

  const txt = await response.text();

  expect(txt).toBe('Hello Hono!');
});

it('should ping server (axios)', async () => {
  const response = await axios.get('http://localhost:3000');

  const txt = response.data;

  expect(txt).toBe('Hello Hono!');
});
