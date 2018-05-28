const { expect } = require('code')
const Joi = require('joi')
const Model = require('../lib/model.js')

describe('Model', function () {
  describe('#constructor', function () {
    it('Set fields', function () {
      const model = new Model()
      expect(model.schema).to.be.not.undefined()
    })

    it('Set attributes', function () {
      const model = new Model({
        schema: {
          name: Joi.string()
        },
        attributes: {
          name: 'sitraka'
        }
      })
      expect(model.attributes.name).to.be.equal('sitraka')
    })
  })

  describe('#validate', function () {
    it('Validate attributes and set attributes', function () {
      const model = new Model({
          schema: {
            name: Joi.string().default('sitraka')
          }
      })
      model.validate()
      expect(model.attributes.name).to.be.equal('sitraka')
    })
  })
})
