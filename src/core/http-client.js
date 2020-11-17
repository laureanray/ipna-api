const got = require('got');

const githubClient = got.extend({
    prefixUrl: 'https://api.github.com',
    headers: {
        'Authorization': `token ${process.env.PAT_1}`
    }
})
