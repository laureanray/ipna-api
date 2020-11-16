const checkName = async (request, reply) => {
  return {
    message: 'Hello'
  }
};


module.exports = function(fastify, opts, done) {
  fastify.get('/:name', checkName);
  done();
}