const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'keyboard cat5 run all 0v3r',
    resave: false,
    saveUninitialized: true
}));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.get('/', function(req, res){
//     res.render("index")
//     // res.json(brandList)
// });

app.post('', function(req, res){
    // brandList.push(req.body.brandName);
    // res.json({
    //     status: "success"
    // })
});




const PORT = process.env.PORT || 9008;

app.listen(PORT, function () {
    console.log('started on: ', this.address().port);
});