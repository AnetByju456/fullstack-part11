const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  //second time
  // eslint-disable-next-line no-constant-condition
  if (true) throw ('error...')
  res.send('ok')
})

const start = async () => {
  await app.listen(PORT)
  console.log(`Server listening on port ${PORT}`)
}

start()
