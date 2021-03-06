require('dotenv').config();
const express = require('express');
const bootstrap = require('./server/bootstrap.js');
const routeSubscriber = require('./server/routes')
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

    if (process.env.NODE_ENV === 'production') {
      console.log('loading static file')
      app.use(express.static(path.join(__dirname, '/client/build')));
      app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname+'/client/build/index.html'));
      });

    }
  
    // subscribe routes - wait for routes to be subscribed before starting server
    await routeSubscriber(app);

    //listen to port
    app.listen(port, () => {
      console.log(`Server is running in port ${port}`)
    });
  })
  .catch(error => {
    console.error(`Error bootstrapping application`, error);
    process.exit(1);
  });
