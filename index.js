const express = require('express');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const app = express();
const url = 'mongodb://localhost:27017/empDB';

//DB connection
mongoose.connect(url,  {useNewUrlParser:true, useFindAndModify: false});
mongoose.connection.on('open', ()=>{console.log("Database connected!")});

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// handleBar config
app.engine('hbs',hbs({extname:'hbs', defaultLayout:'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', )
app.set('view engine', 'hbs');


//routes
app.use('/', require('./controller/student'));






//create a server
app.listen(8000, ()=>{console.log("Server is running on port 8000...")});