const app = require('express')();
const path = require('path');
const port = (process.env.PORT || 3000);
const parseJSON = require('body-parser').json()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/src/public/views'));
//
app.get('/', (req, res) => {
    res.render('login');
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


