require("parramato").Server({
    root:"http://localhost/", // web - browser call, other media - parramato
    socketLocalPath: '/socket',
    httpPort:8080,
    cluster:false,
    dbUri:'mongodb://68.183.85.26:27017/bot',
    staticDirectory:__dirname+"/static",
    adapterPath:"/adapter",
    adapterDirectory:__dirname+"/adapter",
    projectId:"button-jubimoney_065816519086",
    dashbotKey:'AL2G7zplXMUdeukzxv5X4z7ILiwy6OjjQATWE8yB',
    directMultiplier:1,
    fallbackMultiplier:0.8,
    passphraseMiddleware:"YGUYGgyjgblgUGIYGIGkwhbiuashbo98u9283hr9h24rqIYGI932kbidbiadsYE",
    timeoutSeconds:60,
    // fcmServerKey:"AAAAYTZC9WQ:APA91bFRmKa",
    // firebaseWebConfig:{
    //     apiKey: "sd-ZrO9xKQ",
    //     authDomain: "on-f31.firebaseapp.com",
    //     databaseURL: "https://on-f31.firebaseio.com",
    //     projectId: "on-f31",
    //     storageBucket: "",
    //     messagingSenderId: "4175221234234"
    // }
},()=>{
    //TO DO AFTER INITIALIZATION
})