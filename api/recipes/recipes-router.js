const express = require('express')

const router = express.Router()

const Recipes = require('./recipes-model')


router.get('/', (req, res, next) => {
  Recipes.get()
    .then(recipe => {
      res.status(200).json(recipe)
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(400).json({
    message: err.message,
    stack: err.stack,
    custom: 'something went terrible in the recipes router',
  })
})

module.exports = router
