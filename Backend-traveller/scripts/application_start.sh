#!/bin/bash

sudo chmod -R 777 /home/ec2-user/bestravellers

#navigate into our working directory where we have all out bitbucket files
cd /home/ec2-user/bestravellers

#add npm and node to path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # loads nvm bash_completion

#clear cache in npm
npm install --cache /tmp/empty-cache

#install node modules
npm ci

source .env
#start out node app in the backend
npm start > app.out.log 2> app.err.log < /dev/null &