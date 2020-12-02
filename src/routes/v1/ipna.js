const {
  formatGithubSearchResults
} = require('../../core/data-sources')

const checkName = async request => {
  // TODO: Add other sources / package repo
  const githubResults = await formatGithubSearchResults(request.params.name);
  return {
    isTaken: githubResults.length > 0,
    githubResults,
    gitlabResults: [],
    npmResults: []
  }
}

module.exports = function (fastify, opts, done) {
  fastify.get('/:name', checkName)
  fastify.get('/test', () => {
    return {
      message: 'Test route'
    }
  })
  // TODO: Add custom fields here
  done()
}
