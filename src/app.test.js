'use strict'

const { test } = require('tap')
const build = require('./app')


// /v1/pna
test('basic query -> v1/ipna', async t => {
  const app = build()

  const response = await app.inject({
    method: 'GET',
    url: '/v1/ipna'
  });

  t.strictEqual(response.statusCode, 200, 'returns a status code of 200')
});

