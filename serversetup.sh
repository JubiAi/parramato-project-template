#install nginx

sudo apt update
sudo apt install nginx
sudo ufw app list
sudo ufw allow 'Nginx HTTP'
sudo ufw status
systemctl status nginx

# insatll nodejs

sudo apt-get install nodejs
npm install -g npm stable
node -v 
npm install pm2 -g


#install mongodb

sudo apt install -y mongodb
sudo systemctl status mongodb
#sudo service mongod restart
#insatllation doc https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-18-04
