- npm install parramato --save

index.js

1. Entry point for project, settings for project.
- root
	- web - browser call, other media - parramato.
	- callback url for web and other channels
	- in case of web client will directly call this url
	- in case of other channels parramato server will call this url. Hence, it cannot be localhost if want to have other channels except web
- socketDomain 
	- ws: //localhost:8080 (base url for project)
	- wss for secured urls 
	- ws for insecured urls
- httpPort
	- port where the app runs on server
- cluster
	- running app in multiple instance
- dashbotKey
	- dashbot analytics key, which needs to be created from dashbot.io website
- adapterPath
	- path where the pre post apis used in the parramato flows will be placed
- socketPath 
	- path for local socket.io.js files 
	- after running the app try 'http://localhost:8080/socket/socket.io.js'
- socketLocalPath and socketPath what is the difference
- dbUri
	- database URL.
- projectId
 	- project id from parramato
- passphraseMiddleware
	- required for encryption and decryption of project source files on client side
- timeoutSeconds
	- timeout for session of user. canceling the flow



1. CREATING FRONTEND :
	- create a basic frontend for bot using below code.


	require("bot-middleware-jubi").createFrontend({
	    root:"https://yourdomain.com/path",
	    socketDomain: "wss://yourdomain.com",
	    socketPath: '/path/socket',
	    staticDirectory:__dirname+"/static",
	    projectId:"myproject_100911645983",
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

2. 