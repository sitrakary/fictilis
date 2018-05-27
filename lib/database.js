const r = require('rethinkdb')

const database = {
  connection: null,
  numOfConn: 0  // always 0 or 1.
}

class Database {
  static async get (options = {}) {
    if (database.numOfConn === 0) {
      database.connection = await r.connect(options)
      database.numOfConn++
    }
    return database
  }
}

module.exports = Database
