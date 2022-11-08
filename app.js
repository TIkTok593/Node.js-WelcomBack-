const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);  // Here it'll accept only the requests that started with /admin, and on adminRoutes we don't want to redundunt /admin
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'pageNotFound.html'))
})
// app.use((req, res, next) => { // This by default accept all the request, it's not like app.get that only accept the exact path
//     res.statusCode = 404;
//     res.send('<h1>Page not found</h1>')
// }) 

app.listen(3000);
