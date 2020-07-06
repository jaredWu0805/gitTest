const request = require('request');
const process = require('process');

request.patch(
  {
    url: 'https://reqres.in/api/users/2',
    form: {
      name: 'Jared',
      job: 'Engineer'
    }
  },
  function (error, response, body) {
    console.log('Status: ', response.statusCode); // Print the response status code if a response was received
    console.log('body: ', body);
  }
);

//request(
//  "https://reqres.in/api/users/358",
//  function (error, response, body) {
//    console.log('response', response && response.statusCode);
//    console.log('API body:', body); // Print the response status code if a response was received
//});
//
//request.post(
//  {
//    url: 'https://reqres.in/api/users/',
//    form: {
//      name: 'Jared',
//      job: 'Engineer'
//    }
//  },
//  function (error, response, body) {
//    console.log('response', response && response.statusCode);
//    console.log('API body:', body); // Print the response status code if a response was received
//});
