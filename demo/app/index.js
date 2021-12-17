const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const parameter = require('koa-parameter')
const error = require('koa-json-error')
const installRoutes = require('./routes')

const app = new Koa()

app.use(
  error({
    postFormat: (e, { stack, ...rest }) =>
      process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
  })
)
app.use(bodyparser())
app.use(parameter(app))
installRoutes(app)

app.listen(7000, () => console.log('server port 7000'))
