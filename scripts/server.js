import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/api', createProxyMiddleware({ 
    target: 'https://www.searchapi.io/api/v1', 
    changeOrigin: true 
}));

app.listen(3001);