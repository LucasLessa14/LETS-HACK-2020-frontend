const routes = require('express').Router();
const axios = require('axios');

var axiosConfig = {
    headers: {
        Authorization: ""
    }
}

routes.get('/', (req, res) => res.render('home'));
routes.get('/about', (req, res) => res.render('about'));
routes.get('/suport', (req, res) => res.render('suport'));
routes.get('/concact', (req, res) => res.render('concact'));
routes.get('/services', (req, res) => res.render('services'));
routes.get('/analise', (req, res) => res.render('analise'));
routes.get('/connections', (req, res) => res.render('connections'));


routes.get('/login', (req, res) => res.render('authenticate/login'));
routes.get('/register', (req, res) => res.render('authenticate/register'));

routes.post('/login', async (req,res) => {
    const { email, password } = req.body;

    await axios.post('http://localhost:4001/auth/authenticate/', {
        email,
        password,
    }).then(response => {
        var token = response.data.token;
        axiosConfig.headers.Authorization = "Bearer " + token;
        console.log(axiosConfig.headers.Authorization);
        res.redirect('/');
    }).catch( error => {
        console.log(error);
        res.redirect('/login');
    });
});

routes.post('/register', async (req,res) => {
    const { name, email, password } = req.body;

    await axios.post('http://localhost:4001/auth/register/', {
        name,
        email,
        password,
    }).then(response => {
        var token = response.data.token;
        axiosConfig.headers.Authorization = "Bearer " + token;
        console.log(axiosConfig.headers.Authorization);
        res.redirect('/');
    }).catch( error => {
        console.log(error);
        res.redirect('/login');
    });
});

module.exports = routes;