
require('node-elasticsearch').config(require('config').search)

module.exports = {
  activities: require('./activities')
}
