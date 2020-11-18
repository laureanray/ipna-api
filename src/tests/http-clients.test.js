'use strict';

require('should');
require('tap').mochaGlobals();
const got = require('got');
const { v4: uuidv4 } = require('uuid');
const githubAPI  = require('../core/http-clients');

describe('githubAPI', () => {
    it('should return the current rate limit', async () => {
        console.log(process.env.PAT_1);
        const result = await got('https://api.github.com/rate_limit', {
            headers: {
                'Authorization': ` token ${process.env.PAT_1}`
            }
        });

        console.log(result)
    });
})
