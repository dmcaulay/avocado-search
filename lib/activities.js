
var mostRecent = function(avocadoSession, callback) {
  avocadoSession.request({path: '/activities'}, callback)
}

module.exports = {
  mostRecent: mostRecent
}
