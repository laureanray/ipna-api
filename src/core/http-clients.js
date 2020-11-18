const got = require('got');
require('dotenv').config();

const githubAPI = got.extend({
    prefixUrl: 'https://api.github.com/',
    headers: {
        'Authorization': ' token ' + process.env.PAT_1,
        'Content-Type': 'application/json'
    },
    responseType: 'json'
});

module.exports = { githubAPI };
