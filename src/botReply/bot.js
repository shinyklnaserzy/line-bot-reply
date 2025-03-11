import * as line from '@line/bot-sdk';
import { config } from '../config.js';
import { commandBtn } from '../flexMessage/commandBtn.js';

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: config.channelAccessToken,
});

export function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  const userMessage = event.message.text.trim();

  let replyMessage;
  
  if (userMessage === '!')
    replyMessage = commandBtn;
  else if (userMessage === '!營業')
    replyMessage = { type: 'text', text: '我們24小時營業！' };
  else if (userMessage === '!註冊會員')
    replyMessage = { type: 'text', text: '請點擊下方連結進行註冊：https://www.google.com' };
  else 
    replyMessage = { type: 'text', text: '你好，您的請求我已收到！' };

  return client.replyMessage({ replyToken: event.replyToken, messages: [replyMessage] });
}
  