const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const installRoutes = require('./routes')

const app = new Koa()

app.use(bodyparser())
installRoutes(app)

app.listen(7000, () => console.log('server port 7000'))
