import express from 'express'
import path from 'path'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

const app = express()
const port = 8000

// app.use(express.static('public'))
app.get('*', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <App />
    </StaticRouter>
  )
  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="./bundle.js"></script>
      </body>
    </html>
  `

  res.send(html)
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
