require('dotenv').config();
const express = require('express');
const bootstrap = require('./bootstrap');
const routeSubscriber = require('./routes')
const helmet = require('helmet');
const cors = require("cors");
const path = require('path')

bootstrap()
  .then(async () => {
    const port = process.env.PORT || 4000;

    const app = express();
    
    app.use(cors());

    // Set up security
    app.use(helmet());  

    // convert payload to json
    app.use(express.json());
  
    // subscribe routes - wait for routes to be subscribed before starting server
    await routeSubscriber(app);
    
    //load build page from server
    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/*', function (req, res) {
      console.log('page is being loaded')
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }).listen(3000);
    

    //listen to port
    app.listen(port, () => {
      console.log(`Server is running in port ${port}`)
    });
  })
  .catch(error => {
    console.error(`Error bootstrapping application`, error);
    process.exit(1);
  });
