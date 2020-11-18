const got = require('got');
require('dotenv').config();

(async () => {
    const result = await got('https://api.github.com/rate_limit', {
        headers: {
            'Authorization': ` token ${process.env.PAT_1}`,
            'Content-Type': 'application/json'
        }
    });

    console.log(result);
}) (
    console.log('Done')
    )


