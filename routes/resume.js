/* eslint-disable */

const app = require('express').Router();

module.exports = app

app.get('/', (req, res, next) => {
  res.render('resume', {title: 'Jeremy Philipson | Resume', pageTitle: 'Resume'})
})
