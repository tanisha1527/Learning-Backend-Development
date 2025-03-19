const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get('/',(req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/contact', (req, res) => {
    res.send('Contact');
});

app.post('/get-form-data', (req, res) => {
    console.log(req.body);
    res.send('Data received');
})


app.listen(3000);
