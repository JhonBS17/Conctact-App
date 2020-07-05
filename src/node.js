const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(jsonParser);
app.use(urlencodedParser);

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/views/contact.html");
});

app.post('/',function(req,res){
  if(JSON.stringify(req.body)==='{}'){
    res.json({error:"Empty request body"});
  }
  else{
    console.log('Name:', req.body.name, '\nMessage:', req.body.message);
    res.sendFile(__dirname + "/views/contact.html");
  }
});

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})
