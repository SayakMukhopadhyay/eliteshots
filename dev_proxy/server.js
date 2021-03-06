const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const { createProxyMiddleware } = require('http-proxy-middleware')

const { backend, frontend } = require('./processVars')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(createProxyMiddleware(['/api', '/auth', '/frontend'], { target: backend }))
app.use(createProxyMiddleware({ target: frontend }))

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(logger('dev'))
  // eslint-disable-next-line no-unused-vars
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: err
    })
    console.log(err)
  })
}

// production error handler
// no stacktraces leaked to user
if (app.get('env') === 'production') {
  app.use(logger('combined'))
  // eslint-disable-next-line no-unused-vars
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: {}
    })
  })
}

module.exports = app
