const express = require('express');
const port = process.env.PORT || 3001;
const frontRouter = require('./routes/route-frontend');
const backRouter = require('./routes/route-backend');

const app = express();
//Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// listen for requests on port 3001.
app.listen(port, () => {
    console.log(`API server now on port ${port}!`);
    });
