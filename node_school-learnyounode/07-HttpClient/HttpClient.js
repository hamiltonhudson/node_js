var http = require('http')

function httpClient() {
  http.get(process.argv[2], function(response) {
    response.setEncoding('utf8')
    response.on('data', function(data) {
      console.log(data)
    })
    response.on('error', console.error)
  })
}

httpClient()
