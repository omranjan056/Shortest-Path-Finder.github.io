const express= require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

var input1="";
var input2 ="";
app.get("/", function(req, res){
  res.render('main', {rows:input1, column:input2});

});

app.post("/", (req, res) => {
     console.log(req.body);
     input1 = req.body.row;
     input2 = req.body.col;
     console.log(input1);
     console.log(input2);
    // Do something with input1 and input2, e.g. store them in a database
  
    res.render('main',{rows:input1, column:input2});
  });
  



  app.get('/rowCol', (req, res) => {
    const data = {
      row: input1,
      col: input2
    };
    res.json(data);
  });
  

app.listen(3000, function(){
   console.log("server is running on port 3000");
})