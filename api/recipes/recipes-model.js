const db = require('../../data/db-config')

const get = () => {
  return db('recipes')
}

const getById = (id) => {
  return db('recipes')
    .where('id', id).first()
}

module.exports = {
  get,
  getById
}