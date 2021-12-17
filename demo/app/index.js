const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const parameter = require('koa-parameter')
const mongoose = require('mongoose')
const error = require('koa-json-error')
const installRoutes = require('./routes')
const { connectionStr } = require('./config')

const app = new Koa()

// connect
main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect(connectionStr)
}

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
