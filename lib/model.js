const Joi = require('joi')

module.exports = class Model {
  constructor(options = {}) {
    this.schema = Joi.object().keys(options.schema)
    this.attributes = options.attributes
  }

  validate() {
    const {error, value} = Joi.validate(this.attributes || {}, this.schema)
    this.attributes = value
  }
}
