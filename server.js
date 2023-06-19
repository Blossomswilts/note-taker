const express = require('express');
const port = process.env.PORT || 3001;


const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(port, () => {
    console.log(`API server now on port ${port}!`);
    });
    