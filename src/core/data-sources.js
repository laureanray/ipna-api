const { githubAPI, npmAPI } = require('./http-clients')

const searchGithub = async query => {
  try {
    const response = await githubAPI(`search/repositories?q=${query}`)
    return response.body
  } catch (error) {
    return error.response.body
  }
}

const searchNPM = async query => {
  // This doesn't throw an error, no use of try-catching
  const response = await npmAPI(`search?q=${query}`)
  return response.body
}

const formatGithubSearchResults = async (query, maxResults = 3) => {
  if (!query) return [] // FIXME: We should probably change this to better implementation

  const results = await searchGithub(query)
  const topGithubResults = []
  /* istanbul ignore else */
  if (results.items) {
    for (let i = 0; i < results.items.length && i < maxResults; i++) {
      topGithubResults.push({
        id: results.items[i].id,
        name: results.items[i].name,
        full_name: results.items[i].full_name,
        forks: results.items[i].forks,
        stargazers_count: results.items[i].stargazers_count
      })
    }
  }
  return topGithubResults
}

const formatNPMSearchResults = async (query, maxResults = 3) => {
  if (!query) return []

  const results = await searchNPM(query)

  let topNPMResults = []

  if (results && maxResults < results.results.length) {
    for (let i = 0; i < maxResults; i++) {
      topNPMResults.push(results.results[i])
    }
  } else {
    topNPMResults = results.results
  }

  return topNPMResults
}

module.exports = {
  formatGithubSearchResults,
  formatNPMSearchResults,
  searchGithub,
  searchNPM
}
