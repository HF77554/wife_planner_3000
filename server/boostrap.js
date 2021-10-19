const mongoose = require('mongoose')

module.exports = () => new Promise((resolve, reject) => {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true  })
    const db = mongoose.connection

    db.on('error', (error) => {
        console.error(error);
        reject(error);
    });
    
    db.once('open', () => {
        console.log('Connected to Database');
        resolve();
    });

    // Close DB connection on manual process termination
    process.on('SIGTERM', () => {
        console.log('Closing db connection');
        db.close(() => {
            console.log('Closed db connection');
        });
      });
})
