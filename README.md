# NodeJs API

Developed with using of [Express.js](https://expressjs.com) framework.
### Tips and tricks :book:
:point_right: For changing API listening port use API_PORT environment variable (*Default port is 3000*).

# Deployment

## 1.Node.js
	sudo apt-get install npm
	sudo npm install -g n
	sudo apt-get remove nodejs-dev nodejs
	sudo n 8.10.0
## 2. Packages installing
    npm install
## 3. Environment variables
Run command and fill .env file with your credentials

    cp .env.example .env
## 4. Nodemon (for development environment only)
[Nodemon](https://github.com/remy/nodemon) is node-package for watching changes in your .js-files and restart server.
    
    sudo npm install -g nodemon
Run application by one of the below command (in development or production mode)

    nodemon
    NODE_ENV=production nodemon
    node app.js
    NODE_ENV=production node app.js
    npm run start
    npm run dev

### Links
+ [Sequelize ORM](http://docs.sequelizejs.com)
