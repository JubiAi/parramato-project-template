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

	require("parramato").createFrontend({
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


Parramato Project:

Objective: Objective of this project is to collect information from the existing policy holders through facebook messenger and save it in Parramato’s database.

Steps:
1) Creating a project on Parramato:
Login to parramato using Parramato’s credentials. Email: Parramatomf@jubi.ai , Password: ***********
In create new bot section give name to the project and click on create now. (current project name: Parramato_432833574431)
2) Cloning gitHub repository:
Create a github repository or Clone the existing one in your local machine.


3) Facebook Setup:
Create facebook page.
Go to developers facebook and in my Apps select create new. Give name to create new app.
In products section click on plus to add new products. Select messenger. Messenger will be added below products
Go to messenger settings. Select the facebook page. Go to edit permissions and  give access to the selected page. This will generate the page access token.
4) Jubi middleware setup:
Go to parramato and install this npm module in the concerned folder.
From parramato copy the “initialising the server” code and paste it in the new file. Name it ‘index.js’. 
Scroll down on the same page and copy ‘for facebook initialisation’ code and paste it in index.js at ‘//to do after initialisation’ line
In the index.js edit the root, httpPort, dbUri, projectId with your concerned details. Also edit pageAccessToken generated in facebook setup
Run index.js file.

5) Facebook setup continued:
In messenger settings go to Webhooks subscribe to events. Enter the ‘root’ url which you wanna access and also give the verify token ‘verify’. 
Select all the options from subscription fields and select verify and save.
Scroll down and in App review section select pages_messaging and click on add to submission.




6) Creating Flows in parramato:

Go to the concerned project, create a folder with ‘adapter’ name. 
Inside adapter folder create all the intent names which you will be building in parramato. Inside each intent create two javascript files, ‘pre.js’ and ‘post.js’
Post file is used for validating the data entered by the user and Pre file is used for displaying messages and options to the user. Create functions in both the files according to the requirement of project. Function name should be the same as the stage name.
Go to parramato. From the desired project (created in step 1)  select manage bot.
Select Add intent. Give name of the intent. In the query section add all the triggering words and phrases which user can use to start the flow.
In the journey section give stage name. For displaying the msg write the msg in ‘bot says’.
In user option select “API” and add link to function pre file (if that function exists). Format of link should be “root/adapter/intent_name/pre/function_name”
In validation part  select “API” and add link to function post file. Format of link should be “root/adapter/intent_name/post/function_name”.
Also add a message on invalid input option in validation part.
After making changes save the bot. 

7) how to run the bot:
Upload the project file on github.
Go to server and download the updated github file.
Go to facebook messenger and test the bot.  
