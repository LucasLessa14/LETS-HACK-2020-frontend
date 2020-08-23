const port = 8080;

const routes = require('./routes/routes');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${ port }`)
});
