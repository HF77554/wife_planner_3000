require('dotenv').config();
const express = require('express');
const bootstrap = require('./server/bootstrap');
const routeSubscriber = require('./server/routes')
const helmet = require('helmet');
const cors = require("cors");

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
    
    //listen to port
    app.listen(port, () => {
      console.log(`Server is running in port ${port}`)
    });

    //runs webpage
    app.use(express.static('client/build'));
  })
  .catch(error => {
    console.error(`Error bootstrapping application`, error);
    process.exit(1);
  });
