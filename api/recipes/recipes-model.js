const db = require('../../data/db-config')

const get = () => {
  return db('recipes')
}

module.exports = {
  get
}