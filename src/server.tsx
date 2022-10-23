import express from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

declare const module: any

function main () {
  const app = express()
  const port = 8000

  app.use(express.static('build'))
  app.get('/*', (req, res, next) => {
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
        <script type="application/javascript" src="bundle.js"></script>
      </body>
    </html>
  `

    res.send(html)
    res.end()
    next()
  })

  const server = app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => server.close())
  }
}

main()
