import { commandBtn } from './flexMessage';  // 引入定義好的 flexMessage

export function handleUserMessage(userMessage) {
  let replyMessage;

  switch (userMessage) {
    case '!':
      replyMessage = commandBtn;
      break;
    case '!營業':
      replyMessage = { type: 'text', text: '我們24小時營業！' };
      break;
    case '!註冊會員':
      replyMessage = { type: 'text', text: '請點擊下方連結進行註冊：https://www.google.com' };
      break;
    default:
      replyMessage = { type: 'text', text: '你好，您的請求我已收到！' };
  }

  return replyMessage;
}