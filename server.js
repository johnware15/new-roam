const app = require('express')();
app.use(require('morgan')('dev'));
const session = require('express-session');
app.use(session({
    store: new (require('connect-pg-simple')(session))(),
    secret: process.env.FOO_COOKIE_SECRET,
    resave: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }
}));
const path = require('path');
const port = (process.env.PORT || 3000);
const parseJSON = require('body-parser').json()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/src/public/views'));
//
app.get('/', (req, res) => {
    res.render('signup');
});

app.post('/login', parseJSON, (req, res) => {
    var userInfo = req.body;
    AUTH.checkLoginInfo(userInfo) ? 
    () => {
        userInfo.isLoggedIn = true
        res.send(userInfo) 
    }:
    res.redirect('/login');
})
//
const routes = require('./controllers/routes')

app.use(routes)
app.listen(port, () => console.log(`Roam Application LIVE on localhost:${port}`));


