'use strict'

require('dotenv').config()
require('should')
require('tap').mochaGlobals();

const build = require('./app');

describe('/v1/:name Tests', async () => {
    const app = build()

    context('when sending a valid request', async () => {
        it('returns a 200 status code', async () => {
            const response = await app.inject({
                method: 'GET',
                url: '/v1/ipna'
            });

            response.statusCode.should.equal(200);
        });
    });
});

