export const commandBtn = {
  type: "flex",  // Flex message type
  altText: '請選擇一個指令',
  contents: {
    type: "carousel",  // Carousel is part of the Flex message
    contents: [
      {
        type: "bubble",
        size: "nano",
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "!營業",
              size: "20px",
            }
          ],
          action: {
            type: "message",
            label: "action",
            text: "!營業"
          },
          alignItems: "center"
        }
      },
      {
        type: "bubble",
        size: "nano",
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "!註冊會員",
              size: "20px"
            }
          ],
          alignItems: "center",
          action: {
            type: "message",
            label: "action",
            text: "!註冊會員"
          }
        }
      }
    ]
  }
}
