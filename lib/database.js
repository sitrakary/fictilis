const r = require('rethinkdb')

const internals = {}

internals.connection = null
internals.numOfConn = 0

class Database {
  static async getConnection () {
    internals.connection = await r.connect()
    return internals.connection
  }
}

module.exports = Database
