import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'groovymedia',
  apiKey: process.env.API_KEY,
});