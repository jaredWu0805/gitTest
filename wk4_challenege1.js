const request = require('request');
const process = require('process');

const gameName = process.argv[2];
const clientID = 'x14has4vzwes16ijg7e05j9xz8rcwp';
const accept = 'application/vnd.twitchtv.v5+json';

const gamesOptions = {
  url: `https://api.twitch.tv/kraken/search/games?query=${gameName}`,
  headers: {
    'Client-ID': clientID,
    Accept: accept,
  },
};

function printTop200Streams(str) {
  const streamsOptions = {
    url: `https://api.twitch.tv/kraken/streams/?game=${str}&limit=100`,
    headers: {
      'Client-ID': clientID,
      Accept: accept,
    },
  };

  request(streamsOptions, (err, res, body) => {
    const data = JSON.parse(body);
    const streamsArr = data.streams;
    streamsArr.forEach((stream) => {
      console.log(`name: ${stream.channel.name}`.padEnd(25) + `id: ${stream.channel._id}`);
    });
  });
}

function searchGamesStreams(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    printTop200Streams(arr[i].name);
  }
}

request(gamesOptions, (err, res, body) => {
  const data = JSON.parse(body);
  searchGamesStreams(data.games);
});
