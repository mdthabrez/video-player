const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const api = require('./server/routes/api.js'); //routes
const port = 3000;

const app = express();

//app.use(express.static(path.join(__dirname +'dist')));
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));




app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});


app.use('/api', api);









