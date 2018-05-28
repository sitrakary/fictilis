const { describe, it } = require('mocha')
const { assert } = require('chai')

const Database = require('../lib/database.js')

describe('Database', function () {

  it('Return a connection', async function () {
    await Database.connect()
    const connection = await Database.get()
    assert.isNotNull(connection)
  })

  it('Return a connection', async function () {
    const connection = await Database.connect()
    assert.isNotNull(connection)
  })

  it('Constructor sets options', async function () {
    let connection = await Database.connect({db: 'testing'})
    assert.equal(connection.db, 'testing')
  })
})
