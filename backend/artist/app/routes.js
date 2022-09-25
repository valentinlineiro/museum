const express = require('express')
const { v4: uuid } = require('uuid')
const { ApiError } = require('./errors')

const router = express.Router()

router.get('/', async (req, res) => res.send('Hello World!'))

router.post('/', async (req, res, next) => {
  const { name, bio, tags } = req.body
  try {
    if (!name) {
      throw new ApiError(400, 'Missing mandatory field name')
    }
    res.status(201).json({
      id: uuid(),
      name,
      bio,
      tags: tags || [],
    })
  } catch (err) {
    next(err)
  }
})

module.exports.router = router
