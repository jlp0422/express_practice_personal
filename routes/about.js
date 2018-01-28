/* eslint-disable */

const app = require('express').Router();

module.exports = app

app.get('/', (req, res, next) => {
  res.render('about', {title: 'Jeremy Philipson | About', pageTitle: 'About Me'})
})
