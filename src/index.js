const express = require('express')
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

//app.use(require('./routes/'));
//app.use(require('./routes/'));

app.listen(port);
console.log('Server on port ', port);