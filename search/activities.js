var es = require('node-elasticsearch').avocado.addType('activity',{
  mapping: {
    activity: {
      properties: {
        message: {type: 'string', analyzer: 'snowball'}
      }
    }
  }
})

var add = function(activity, callback) {
  var searchable = { _id: activity.id, timeCreated: new Date(activity.timeCreated) }
  if (activity.type === 'message' && activity.data.text) {
    searchable.message = activity.data.text
  } else if (activity.type === 'photo' && activity.data.caption) {
    searchable.message = activity.data.caption
  } else {
    // not indexable so we return immediately
    return callback()
  }
  es.activity.add(searchable, callback)
}

var search = function(query, callback) {
  var query = {
    query: {
      multi_match: {
        query: query,
        fields: ['message']
      }
    },
    sort: [
      { timeCreated: "desc" }
    ]
  }
  es.activity.search(query, callback)
}

module.exports = {
  add: add,
  search: search
}
