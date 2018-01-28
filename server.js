/* eslint-disable */

const express = require('express');
const path = require('path');
const app = express();
const nunjucks = require('nunjucks');
nunjucks.configure({ noCache: true })

const port = process.env.PORT || 3000;

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/vendor', express.static(path.join(__dirname, 'css')));


// must go before any routers
app.use((req, res, next) => {
  res.locals.path = req.url;
  next();
})

app.use('/experience', require('./routes/experience'));
app.use('/resume', require('./routes/resume'))
app.use('/about', require('./routes/about'));

app.get('/', (req, res, next) => {
  res.render('index.html', { title: 'Jeremy Philipson | Home', pageTitle: 'Jeremy Philipson' })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
