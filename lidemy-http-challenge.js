const request = require('request');

const username = 'admin',
    password = 'admin123',
 apiUrl = 'https://' + username + ':' + password + '@lidemy-http-challenge.herokuapp.com/api/v2',
 v3Url = 'https://lidemy-http-challenge.herokuapp.com/api/v3';

const options = {
  url: v3Url + '/logs',
  headers:{
//    'x-access-token':
//    'Accept': 'text/html,application/xhtml+xml,application/xml',
    'Origin': 'lidemy.com',
    'User-Agent': 'Googlebot',
//    'Access-Control-Request-Method': 'GET',
//    'Access-Control-Request-Headers': 'X-PINGOTHER, Content-Type'
  }
}

//request({url}, function (error, response, body) {
//   console.log(body);
//});

request(options, (err, res, body) => {

//  const data = JSON.parse(body)
//  console.log(data);
  console.log(body);
});

//request.delete(apiUrl + '/me' , (err, res ,body) => {
//    if (err) {
//        console.log('Failed to post', err);
//        return;
//      }
//
////      const data = JSON.parse(body);
////      console.log(data);
//      console.log(body);
//  });
