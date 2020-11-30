const {
  formatGithubSearchResults
} = require('../../core/data-sources')

const checkName = async request => {
  // TODO: Add other sources / package repo
  return {
    is_taken: true,
    github_results: await formatGithubSearchResults(request.params.name),
    gitlab_results: [],
    npm_results: []
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
