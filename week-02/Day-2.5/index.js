import express from 'express'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3000

// Re-creating __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
