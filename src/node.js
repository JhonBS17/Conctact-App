const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

//connecting to DB
mongoose.connect('mongodb+srv://user1:mongo123@database1.raqwr.mongodb.net/DataBase1?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(db => console.log('DB Connected'))
    .catch(err => console.log(err));

//importing routes
const indexRoutes = require('./routes');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + "/views/contact.html");
// });

// app.post('/',function(req,res){
//   if(JSON.stringify(req.body)==='{}'){
//     res.json({error:"Empty request body"});
//   }
//   else{
//     console.log('Name:', req.body.name, '\nMessage:', req.body.message);
//     res.sendFile(__dirname + "/views/contact.html");
//   }
// });

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})
