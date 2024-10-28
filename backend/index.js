const express = require('express'),
  path = require('path')
const dotenv = require('dotenv'),
  { Client } = require('pg')

const app = express()
const port = process.env.PORT || 3000

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI,
})

client.connect()

app.get('/api', async (_request, response) => {
  const { rows } = await client.query('SELECT * FROM christmasMarket')
  response.send(rows)
})

app.use(express.static(path.join(path.resolve(), 'dist')))

app.listen(port, () => {
  console.log('Redo på http://localhost:{port}/')
})
