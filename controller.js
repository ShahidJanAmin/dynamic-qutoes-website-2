var express = require("express");
const app = express();
const port =process.env.PORT ||800;
const body_parser = require("body-parser");
const { __express } = require("ejs");
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(express.static('public'));
app.use('css', express.static(__dirname+'public/css'));
app.use('js', express.static(__dirname+'public/javascript'));

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
 
  res.render('index.ejs');
});

app.listen(port);