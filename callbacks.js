var https = require('https');

function getHTML (options, callback) {

  var output = '';

  https.get(requestOptions, function (response) {
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

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML();