require("parramato").Server(
  {
    root: "<URL>",
    socketLocalPath: "/socket",
    httpPort: "<PORT>",
    cluster: false,
    dbUri: "mongodb://127.0.0.1:27017/bot",
    staticDirectory: __dirname + "/static",
    adapterPath: "/adapter",
    adapterDirectory: __dirname + "/adapter",
    projectId: "<PROJECT_ID>",
    dashbotKey: "<DASHBOT_KEY>",
    directMultiplier: 1,
    fallbackMultiplier: 0.8,
    passphraseMiddleware:
      "YGUYGgyjgblgUGIYGIGkwhbiuashbo98u9283hr9h24rqIYGI932kbidbiadsYE",
    timeoutSeconds: 60
  },
  () => {
    //TO DO AFTER INITIALIZATION
  }
);
