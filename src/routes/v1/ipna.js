const {
    searchGithub,
    formatGithubSearchResults
} = require("../../core/data-sources");

const checkName = async (request, reply) => {
    // TODO: Add other sources / package repo
    return await formatGithubSearchResults(request.params.name);
};


module.exports = function (fastify, opts, done) {
    fastify.get('/:name', checkName);
    done();
}
