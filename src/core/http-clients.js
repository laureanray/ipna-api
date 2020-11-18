const got = require('got');

const githubAPI = got.extend({
    prefixUrl: 'https://api.github.com/',
    headers: {
        'Authorization': ` token ${process.env.PAT_1}`,
        'Content-Type': 'application/json'
    }
});

module.exports = { githubAPI };
