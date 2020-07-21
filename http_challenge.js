const request = require('request');

for (let i = 54; i < 59; i += 1) {
  requestBook(i);
}

function requestBook(id) {
    request(`https://lidemy-http-challenge.herokuapp.com/api/books/${id}`, (err, res, body) => {
      if (err) {
        console.log('Request failed', err);
        return;
      }

      const data = JSON.parse(body);
      console.log(data);
    },);
}

const options = {
  url: `https://lidemy-http-challenge.herokuapp.com/lv2?token={HellOWOrld}`,
  headers: {
    id: 58,
  },
};

request.get(options, (err, res, body) => {
      if (err) {
        console.log('Request failed', err);
        return;
      }

//      const data = JSON.parse(body);
      console.log(body);
    },);

