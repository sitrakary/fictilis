const { describe, it } = require('mocha')
const { assert } = require('chai')

const Database = require('../lib/database.js')

describe('Database', function () {
  it('Return a connection', async function () {
    const db = await Database.get()
    assert.isNotNull(db.connection)
  })

  it('Increment number of connection', async function () {
    const db = await Database.get()
    assert.isAbove(db.numOfConn, 0)
  })

  it('Connect only once', async function () {
    await Database.get()
    const db = await Database.get()
    assert.equal(db.numOfConn, 1)
  })
})
