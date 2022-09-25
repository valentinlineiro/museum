const app = require('./app/app')

if (require.main === module) {
  const PORT = 3000
  app.listen(PORT, () => console.log(`Artist micro listening on port ${PORT}`))
}

module.exports = app
