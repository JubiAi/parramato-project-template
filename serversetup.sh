#install nginx

sudo apt update
sudo apt install nginx
sudo ufw app list
sudo ufw allow 'Nginx HTTP'
sudo ufw status
systemctl status nginx

# insatll nodejs

sudo apt-get install nodejs
node -v 
npm insatll pm2 -g


#install mongodb

sudo apt-get install -y mongodb-org
sudo service mongod start
#sudo service mongod restart
