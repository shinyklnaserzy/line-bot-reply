import express from 'express';
import * as line from '@line/bot-sdk';
import { config } from './config.js';
import { handleEvent } from './botReply/bot.js';

const router = express.Router();

router.post('/callback', line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

export default router;