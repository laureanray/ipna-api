'use strict'

const server = require('./app')({
  logger: {
    level: 'info',
    prettyPrint: true
  }
})

server.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
})
