const express = require('express')

const recipesRouter = require('./recipes/recipes-router')

const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)

server.get('/', (req, res) => {
  res.send(`
    <h2>Success!</h2>
  `)
})

module.exports = server;