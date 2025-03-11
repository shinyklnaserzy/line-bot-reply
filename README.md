# LINE Messaging API SDK for nodejs

[![Github Action](https://github.com/line/line-bot-sdk-nodejs/actions/workflows/test.yml/badge.svg)](https://github.com/line/line-bot-sdk-nodejs/actions/workflows/test.yml)
[![npmjs](https://badge.fury.io/js/%40line%2Fbot-sdk.svg)](https://www.npmjs.com/package/@line/bot-sdk)


## Introduction
The LINE Messaging API SDK for nodejs makes it easy to develop bots using LINE Messaging API, and you can create a sample bot within minutes.

## Documentation

See the official API documentation for more information

- English: https://developers.line.biz/en/docs/messaging-api/overview/
- Japanese: https://developers.line.biz/ja/docs/messaging-api/overview/

line-bot-sdk-nodejs documentation: https://line.github.io/line-bot-sdk-nodejs/#getting-started

## Requirements

* **Node.js** 18 or higher

## Installation

Using [npm](https://www.npmjs.com/):

``` bash
$ npm install @line/bot-sdk --save
```

## Help and media
FAQ: https://developers.line.biz/en/faq/

News: https://developers.line.biz/en/news/

## Versioning
This project respects semantic versioning

See http://semver.org/

## Contributing

Please check [CONTRIBUTING](CONTRIBUTING.md) before making a contribution.

## License
```
Copyright (C) 2016 LINE Corp.
 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
 
   http://www.apache.org/licenses/LICENSE-2.0
 
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

# 自己記錄用
Line Developers
Line official Account Manager
  
測試時啟動 
   node index
   ngrok http 3000 (生成網址)
  
確定ngrok的網址(隨機生成) 放到 Line Developers 裡 Messaging API 的 Webhook settings 進行驗證
要開啟 Use webhook(在 Webhook URL下方)
  
主要使用程式
/your-project
│── /src
|   |── /botReply                   # LINE Bot 接收回應
│   │   │── bot.js                  # 處理 LINE Bot 事件 接收傳出訊息接口
│   │   │── messageHandler.js       # 訊息整理與回應處理
│   │── callback.js                 # 設定 /callback 路由
│   │── config.js                   # 環境變數設定
│   │── flexMessage                 # 設定回復訊息樣式
│   │── server.js                   # 啟動 Express 伺服器
│── .env                            # 環境變數
│── index.js                        # node啟動位置