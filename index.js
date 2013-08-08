var memoize = require('memoizee')
var $ = require('jquery')

socrata = function(terms, portal, page, callback) {
  var url = 'https://' + portal + '/api/search/views.json?limit=1&page=' + page + '&q=' + encodeURIComponent(terms);
  $.get(url, function(data) {
    var view = data.results[0].view
    delete view.columns
    callback(view)
  })
}

exports.socrata = memoize(socrata, {async:true})