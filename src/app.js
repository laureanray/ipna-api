'use strict'

const fastify = require('fastify')

function build (opts = {}) {
  const app = fastify(opts)
  app.register(require('fastify-rate-limit'), {
    max: 30,
    timeWindow: '1 minute'
  })
  app.register(require('./routes/v1/ipna'), { prefix: '/v1' })
  return app
}

module.exports = build
