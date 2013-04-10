
var mostRecent = function(avocadoSession, callback) {
  avocadoSession.request({path: '/activities'}, function(err, response) {
    if (err) return callback(err)
    callback(null, JSON.parse(response))
  })
}

module.exports = {
  mostRecent: mostRecent
}
