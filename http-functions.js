var https = require('https');

module.exports = function getHTML (options, callback) {

  var output = '';

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      // console.log('Chunk Received. Length:', data.length);
      output += data;
    });

    response.on('end', function() {
      // console.log('Response stream complete.');
      console.log(output);
    });
  });
};