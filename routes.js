const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('home', '/home/:slug')
routes.add('search', '/search/:slug')
//routes.add('test', '/test/:slug')
