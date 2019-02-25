const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); // lines 4 to 11 are for connecting localhost:3000/ to the index

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {  // this is connecting the app to the index.ejs that was previously before index.html 
	res.render('index.ejs');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));