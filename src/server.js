import express from 'express';
import { config } from './config.js';
import callbackRouter from './callback.js';

const app = express();

// 設定 /callback 路由
app.use(callbackRouter);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});