const express = require('express')
// const routesUsers = require('./users.routes')

// const isAuthenticatedByPassportJwt = require('../libs/passport')

const routesAuth = require('./auth.routes')
const routesUsers= require("./users.routes")
const routesPublication = require("./publications.routes")
function routerModels(app) {
  const router = express.Router()

  app.use('/api/v1', router)
  router.use('/auth', routesAuth)
  router.use("/users", routesUsers)
  router.use("/", routesPublication)
}

module.exports = routerModels
