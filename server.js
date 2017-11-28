const app = require('express')();
const path = require('path');
const port = (process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/src/public/views'));

app.get('/', (req, res) => {
    res.render('login');
});

app.listen(port, () => console.log(`Roam Application LIVE on localhost:${port}`));