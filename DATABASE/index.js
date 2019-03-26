const express    = require('express');
const app    = express();
const mongoose   = require('mongoose');
const config   = require('./config');
const bodyParser  = require('body-parser');
const userAction   = require('./user_action');

app.set('port',process.env.PORT || 2586);
mongoose.connect(config.path);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.post('/createUser',(req,res)=>userAction.createUser(req,res));

app.listen(app.get('port'),()=>{
console.log(`Server listening on ${app.get('port')}`);
})
