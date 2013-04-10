var assert = require('assert')
var config = require('config').avocado
var avocado = require('avocado-api')
avocado.setup(config)
var session = avocado.login(config.credentials)
var activities = require('../../lib/activities')

describe('avocado activities', function() {
  describe('mostRecent', function() {
    it('returns the most recent activites', function(done) {
      activities.mostRecent(session, function(err, res) {
        assert.ifError(err)
        console.log(res)
        done()
      })
    })
  })
})

