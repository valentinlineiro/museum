const express = require('express')
const { v4: uuid } = require('uuid')

const router = express.Router()

router.get('/', async (req, res) => res.send('Hello World!'))

router.post('/', async (req, res) => {
  const { name, bio, tags } = req.body
  res.status(201).json({
    id: uuid(),
    name,
    bio,
    tags,
  })
})

module.exports.router = router
