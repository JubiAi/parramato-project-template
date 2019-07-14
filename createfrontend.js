require("bot-middleware-jubi").createFrontend({
    root:"http://localhost:8080",
    staticDirectory:__dirname+"/static",
    projectId:"button-jubimoney_065816519086",
    passphraseMiddleware:"YGUYGgyjgblgUGIYGIGkwhbiuashbo98u9283hr9h24rqIYGI932kbidbiadsYE",
    firebaseWebConfig:{
        apiKey: "AIzaSyAAqVdFN_8wbXK4W_YLZj2q6rF-ZrO9xKQ",
        authDomain: "push-notification-f31b9.firebaseapp.com",
        databaseURL: "https://push-notification-f31b9.firebaseio.com",
        projectId: "push-notification-f31b9",
        storageBucket: "",
        messagingSenderId: "417522185572"
    },
    iconPath:"/icon.png"
 })