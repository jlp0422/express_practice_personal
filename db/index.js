const jobs = [
  { id: 1, company: 'FanDuel', role: 'Email Marketing Associate', location: 'New York, NY', years: 'June 2017 - Present', logo: '../vendor/fanduel_logo.png'},
  { id: 2, company: 'FanDuel', role: 'Email Marketing Coordinator', location: 'New York, NY', years: 'May 2016 - June 2017', logo: '../vendor/fanduel_logo.png'},
  { id: 3, company: 'FanDuel', role: 'Customer Support Agent', location: 'New York, NY', years: 'June 2015 - May 2016', logo: '../vendor/fanduel_logo.png' },
  { id: 4, company: 'Wake Forest University', role: 'Sports Marketing Coordinator', location: 'Winston Salem, NC', years: 'September 2014 - May 2015', logo: '../vendor/wfu_logo.jpg'},
  { id: 5, company: 'Brooklyn Nets', role: 'VIP Access and Experience Intern', location: 'Brooklyn, NY', years: 'August 2014 - December 2014', logo: '../vendor/nets_logo.png' },
  { id: 6, company: 'Wells Fargo Center', role: 'Complex Marketing Intern', location: 'Philadelphia, PA', years: 'June 2013 - August 2013', logo: '../vendor/wfc_logo.png' },
  { id: 7, company: 'Syracuse Chiefs', role: 'Gameday Marketing Intern', location: 'Syracuse, NY, NY', years: 'April 2012 - September 2012', logo: '../vendor/chiefs_logo.png' }
]

const getJobs = () => {
  return jobs;
}

const getJob = (id) => {
  return jobs.find(job => job.id === id * 1)
}

module.exports = {
  getJobs,
  getJob
}
