/* eslint-disable */

const db = require('../db');
const app = require('express').Router();

app.get('/', (req, res, next) => {
  const jobs = db.getJobs()
  // console.log(jobs)
  res.render('experience', { title: 'Jeremy Philipson | Experience', pageTitle: 'Experience', jobs })
});

app.get('/:id', (req, res, next) => {
  const job = db.getJob(req.params.id);
  // console.log(job)
  // console.log(req.params.id)
  res.render('job', { title: `Jeremy Philipson | ${job.company}`, pageTitle: job.role, job})
})

module.exports = app
