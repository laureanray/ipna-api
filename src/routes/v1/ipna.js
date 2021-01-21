const {
  formatGithubSearchResults,
  formatNPMSearchResults
} = require('../../core/data-sources')

const checkName = async request => {
  // TODO: Add other sources / package repo
  const githubResults = await formatGithubSearchResults(request.params.name)
  const npmResults = await formatNPMSearchResults(request.params.name)
  return {
    isTaken: githubResults.length > 0 || npmResults.total > 0,
    githubResults,
    npmResults
  }
}

module.exports = function (fastify, opts, done) {
  fastify.get('/:name', {
    schema: {
      description: 'search query',
      tags: ['v1'],
      summary: 'v1 main endpoint',
      params: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'search query'
          }
        }
      },
      response: {
        200: {
          description: 'Successful response',
          type: 'object'
        }
      },
      security: [
        {
          apiKey: []
        }
      ]
    }
  }, checkName)
  fastify.get('/test', () => {
    return {
      message: 'Test route'
    }
  })
  // TODO: Add custom fields here
  done()
}
