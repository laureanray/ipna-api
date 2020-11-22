'use strict'

require('should')
require('tap').mochaGlobals()
const { githubAPI } = require('../core/http-clients')
require('dotenv').config()

describe('githubAPI', () => {
  it('should return the current rate limit', async () => {
    const result = await githubAPI('rate_limit')
    result.should.be.ok()
  })
})
