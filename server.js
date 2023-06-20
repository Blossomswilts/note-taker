const express = require('express');
const frontRoute = require('./Develop/routes/route-frontend');
const backRoute = require('./Develop/routes/route-api');
const port = process.env.PORT || 3000;
const path = require('path');


const app = express();
//Middleware
app.use(express.static(path.join(__dirname, '/Develop/public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// listen for requests on port 3001.
app.listen(port, () => {
    console.log(`API server now on port http://localhost:${port}`);
    });

    // use apiRoutes
app.use(frontRoute);
app.use(backRoute);
