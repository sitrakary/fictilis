const { describe, it } = require('mocha')
const { assert } = require('chai')

const Database = require('../lib/database.js')

describe('Database', function () {
  it('Return a connection', async function () {
    const connection = await Database.getConnection()
    assert.isNotNull(connection)
  })
})
