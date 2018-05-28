const r = require('rethinkdb')

const internals = {
  connection: null
}

class Database {
  static async connect (options = {}) {
    internals.connection = await r.connect(options)
    internals.connection.use(options.db)
    return internals.connection
  }

  static async get () {
    return internals.connection
  }
}

module.exports = Database
