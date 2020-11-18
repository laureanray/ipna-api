const { githubAPI } = require('./http-clients');

const searchGithub = async query => {
  try {
      const response = await githubAPI(`search/repositories?q=${query}`);
      return response.body;
  } catch (error) {
      console.log(error.response.body);
      return error.response.body;
  }
}

const formatGithubSearchResults = async (query, maxResults = 3) => {
  if (!query) return []; // FIXME: We should probably change this to better implementation

  const results =  await searchGithub(query);
  const topGithubResults = [];
  /* istanbul ignore else */
  if (results.items) {
    for (let i = 0; i < results.items.length && i < maxResults; i++) {
      topGithubResults.push({
        id: results.items[i].id,
        name: results.items[i].name,
        full_name: results.items[i].full_name,
        forks: results.items[i].forks,
        stargazers_count: results.items[i].stargazers_count
      });
    }
  }
  return topGithubResults;
}


module.exports = {
  formatGithubSearchResults,
  searchGithub
}
