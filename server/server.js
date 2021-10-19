require('dotenv').config();
const express = require('express');
const bootstrap = require('./bootstrap');
const routeSubscriber = require('./routes')

bootstrap()
  .then(async () => {
    const port = process.env.PORT || 3000;

    const app = express();

    // Set up security
    app.use(helmet());
    

    // convert payload to json
    app.use(express.json());

    // subscribe routes
    routeSubscriber(app);
    
    //listen to port
    app.listen(port, () => {
      console.log(`Server is running in port ${port}`)
    });
  })
  .catch(error => {
    console.error(`Error bootstrapping application`, error);
    process.exit(1);
  });
