const express = require('express')
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(require('./routes/userRouter'));
app.use(require('./routes/taskRouter'));

app.listen(port);
console.log('Server on port ', port);