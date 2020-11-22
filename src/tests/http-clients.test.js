'use strict'

require('should')
require('tap').mochaGlobals()
const { githubAPI, npmAPI } = require('../core/http-clients')
require('dotenv').config()

describe('githubAPI', () => {
  it('should return the current rate limit', async () => {
    const result = await githubAPI('rate_limit')
    result.should.be.ok()
  })
})

describe('npmAPI', () => {
  it('should return an ok response for a sample search', async () => {
    const result = await npmAPI('search?q=node')
    result.should.be.ok()
  })
})
