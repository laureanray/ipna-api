'use strict'

require('should')
require('tap').mochaGlobals()
const { v4: uuidv4 } = require('uuid')
const {
  searchGithub,
  searchNPM,
  formatGithubSearchResults,
  formatNPMSearchResults
} = require('../core/data-sources')

describe('searchGithub', () => {
  it('should return results for an existing repository (ipna)', async () => {
    const repositoryResult = await searchGithub('ipna')
    repositoryResult.should.not.be.null()
  })

  it('should return an error if query is empty', async () => {
    const repositoryResult = await searchGithub('')
    repositoryResult.message.should.equal('Validation Failed')
  })
})

describe('searchNPM', () => {
  it('should return results for an existing npm package (react)', async () => {
    const npmResult = await searchNPM('react')
    npmResult.should.not.be.null()
  })

  // it('should return an error if query is empty', async () => {
  //   const npmResult = await searchNPM('')
  //   const s.l
  // })
})

describe('formatNPMSearchResults', () => {
  it('should return empty array when querying blank/empty string', async () => {
    (await formatNPMSearchResults(''))
      .should.be.empty()
  })

  it('should return only specific max results', async () => {
    const result = await formatNPMSearchResults('react', 3)
    result.length.should.not.be.greaterThan(3)
    console.log(result.length)
  })
})

describe('formatGithubSearchResults', () => {
  it('should not exceed default # of max results', async () => {
    (await formatGithubSearchResults('tensorflow'))
      .length.should.not.be.greaterThan(3)
    // TODO: Change this to use the configuration/args
  })

  it('should not exceed defined max results', async () => {
    (await formatGithubSearchResults('tensorflow', 1))
      .length.should.not.be.greaterThan(1)
  })

  it('should return empty array when querying blank/empty string', async () => {
    (await formatGithubSearchResults(''))
      .should.be.empty()
  })

  it('should return empty array when query is undefined', async () => {
    (await formatGithubSearchResults(undefined))
      .should.be.empty()
  })

  it('should return an empty array when query is null', async () => {
    (await formatGithubSearchResults(null))
      .should.be.empty()
  })

  it('should return an empty array when repository doesn\'t exists', async () => {
    (await formatGithubSearchResults(uuidv4().toString()))
      .should.be.empty()
  })
})
