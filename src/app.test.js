'use strict'

require('tap').mochaGlobals();
const build = require('./app');
const should = require('should')

// /v1/pna
describe('/v1/:name Tests', async () => {
    const app = build()

    context('when sending a valid request', async () => {
        it('returns a 200 status code', async () => {
            const response = await app.inject({
                method: 'GET',
                url: '/x1/ipna'
            });

            response.statusCode.should.equal(200);
        });
    });
});

// test('/v1/:name', async t => {
//     const app = build();
//
//     const response = await app.inject({
//         method: 'GET',
//         url: '/v1/ipna'
//     });
//
//     t.strictEqual(response.statusCode, 200, '200 status code for valid requests');
// })
//
