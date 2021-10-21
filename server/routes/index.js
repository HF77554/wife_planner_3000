const fs = require('fs/promises');
const path = require('path');

module.exports = async (app) => {
    // Get list of routers
    const files = await fs.readdir(__dirname);

    //iterate through routers
    files.forEach(file => {
        // make sure the file is JS and not this file
        if (file != 'index.js' && file.endsWith('.js')) {
            
            // get route subscriber 
            routerSubscriber = require(path.join(__dirname, file));
            
            // check if route subscriber exists (UserTasks would not exist right now)
            if (routerSubscriber && typeof routerSubscriber == 'function') {
                routerSubscriber(app);
                console.log(`Router ${file} was subscribed`)
            } else {
                console.error(`Router ${file} does not export a subscriber`);
            }
        }
    })
};
  
