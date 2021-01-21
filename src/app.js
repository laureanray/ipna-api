'use strict'

const fastify = require('fastify')
const packageJson = require('../package.json')

function build (opts = {}) {
  const app = fastify(opts)

  app.register(require('fastify-rate-limit'), {
    max: 25,
    timeWindow: '1 minute'
  })

  app.register(require('fastify-swagger'), {
    routePrefix: '/',
    swagger: {
      info: {
        title: packageJson.name,
        description: packageJson.description,
        version: packageJson.version
      },
      externalDocs: {
        url: packageJson.repository,
        description: 'Find more info here'
      },
      host: 'localhost:3000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'v1', description: 'version 1 endpoint' }
      ]
    },
    exposeRoute: true
  })

  app.register(require('./routes/v1/ipna'), { prefix: '/v1' })

  app.ready(err => {
    if (err) throw err
    app.swagger()
  })
  return app
}

module.exports = build
