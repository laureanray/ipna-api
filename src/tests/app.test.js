'use strict'

require('should')
require('tap').mochaGlobals()

const build = require('../app')

describe('/ Tests', async () => {
  const app = build()

  context('rate limiting', async () => {
    it('return a 429 status code', async () => {
      let response
      for (let i = 0; i < 15; i++) {
        response = await app.inject({
          method: 'GET',
          url: '/v1/test'
        })
      }
      response.statusCode.should.equal(429)
    })
  })

  context('when sending requests to non existent endpoint(s)', async () => {
    it('returns a 404 status code', async () => {
      const response = await app.inject({
        method: 'GET',
        url: '/test'
      })

      response.statusCode.should.equal(404)
    })
  })
})

describe('/v1/:name Tests', async () => {
  const app = build()

  context('when sending a valid request', async () => {
    it('returns a 200 status code', async () => {
      const response = await app.inject({
        method: 'GET',
        url: '/v1/ipna'
      })

      response.statusCode.should.equal(200)
    })
  })
})
