'use strict'

const fastify = require('fastify')

function build(opts={}) {
  const app = fastify(opts)


  app.register(require('./routes/v1/ipna'), { prefix: '/v1' });


  return app
}

module.exports = build