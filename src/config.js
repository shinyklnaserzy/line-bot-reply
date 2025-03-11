import dotenv from 'dotenv';

dotenv.config();

export const config = {
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  port: process.env.PORT || 3000,
};