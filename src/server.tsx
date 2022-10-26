import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import express from 'express'
import App from './App'
import store from './store'

const app = express()
const port = 8000

app.use(express.static('build'))
app.get('/*', (req, res, next) => {
  const content = renderToString(
    <Suspense fallback={null}>
      <Provider store={store}>
        <StaticRouter location={req.path}>
          <App />
        </StaticRouter>
      </Provider>
    </Suspense>
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

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
