onst https = require('https');

function getMovieTitles(substr) {
  let titles = [];
  let pageNum = 1;
  let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + '&page=' + pageNum;
  
  // https://stackoverflow.com/questions/11826384/calling-a-json-api-with-node-js
  // Disadvantage of using https: No support for promises
  https.get(url, function(res) {
    let body = '';
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      let json = JSON.parse(body);
      for (let i = 0; i < json.data.length; i++) {
        titles.push(json.data[i].Title);
      }
      // console.log(titles); // DEBUG
      
      // Handle following pages
      for (let i = 2; i <= json.total_pages; i++) {
        url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + '&page=' + i;
        https.get(url, function(res) {
          let body = '';
          res.on('data', function(chunk) {
            body += chunk;
          })
          res.on('end', function() {
            let json = JSON.parse(body);
            for (let i = 0; i < json.data.length; i++) {
              titles.push(json.data[i].Title);
            }
            if (i === json.total_pages) {
              console.log(titles.sort());
            }
          })
        }).on('err', function(e) {
          console.log('Error on page: ' + i + ', with error messsage: ' + e);
        });
      }
    });
  }).on('error', function(e) {
      console.log("Got an error: ", e);
  });
}

console.log(getMovieTitles('spiderman'));
