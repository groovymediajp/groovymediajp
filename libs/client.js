import { createClient } from 'microcms-js-sdk';

console.log('apiKey', process.env.API_KEY);
export const client = createClient({
  serviceDomain: 'groovymedia',
  apiKey: process.env.API_KEY,
});