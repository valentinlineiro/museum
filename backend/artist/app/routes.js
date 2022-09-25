const express = require('express')
const { v4: uuid } = require('uuid')

const router = express.Router()

router.get('/', async (req, res) => res.send('Hello World!'))

router.post('/', async (req, res) => {
  const { name, bio, tags } = req.body
  if (!name) {
    res.status(400).json({
      message: 'Mandatory field name is missing',
    })
  } else {
    res.status(201).json({
      id: uuid(),
      name,
      bio,
      tags: tags || [],
    })
  }
})

module.exports.router = router
