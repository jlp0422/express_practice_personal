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
app.use('/experience', require('./routes/experience'))

app.use((req, res, next) => {
  res.locals.path = req.url;
  // console.log(res.locals.path)
  next();
})

app.get('/', (req, res, next) => {
  res.render('index.html', { title: 'Home', pageTitle: 'Jeremy Philipson' })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
