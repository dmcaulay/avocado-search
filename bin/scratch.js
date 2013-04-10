
var async = require('async')
var config = require('config')
// init db
require('mongo-wrapper').setup(config.db)

// init avocado api
var avocado = require('avocado-api')
avocado.setup(config.avocado)

var search = require('../search')

// login with my credientials
var session = avocado.login(config.avocado.credentials)

var activites = require('../lib/activities')

// might use mongo so i don't index twice
// var db = require('mongo-wrapper').db.add('activites')

// index activities
activites.mostRecent(session, function(err, newActivities) {
  async.forEach(newActivities, function(a, done) {
    search.activities.add(a, done)
  }, function(err) {
    console.log('done indexing',err)
  })
})

// search activites
search.activities.search('dance', function(err, results) {
  console.log('results',results,err)
})


