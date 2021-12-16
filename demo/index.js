const Koa = require('koa')
const KoaRouter = require('koa-router')
const bodyparser = require('koa-bodyparser')

const router = new KoaRouter({ prefix: '/users' })
const app = new Koa()

const db = [
  {
    name: 'tom'
  }
]

router.get('/', async (ctx) => {
  ctx.body = db
})

router.get('/:id', async (ctx) => {
  ctx.body = db[ctx.params.id]
})

router.post('/', async (ctx) => {
  const reqBody = ctx.request.body
  db.push(reqBody)
  ctx.body = reqBody
})

router.put('/:id', async (ctx) => {
  const reqBody = ctx.request.body
  db[ctx.params.id] = reqBody
  ctx.body = reqBody
})

router.delete('/:id', async (ctx) => {
  db.splice(ctx.params.id, 1)
  ctx.status = 204
})

app.use(bodyparser())
app.use(router.routes())

app.listen(7000, () => console.log('server port 7000'))
