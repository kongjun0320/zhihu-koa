const Router = require('koa-router')
const jsonwebtoken = require('jsonwebtoken')
const jwt = require('koa-jwt')
const {
  find,
  findById,
  create,
  update,
  delete: del,
  login,
  checkOwner
} = require('../controllers/users')
const { secret } = require('../config')
const router = new Router({ prefix: '/users' })
// 认证
const auth = async (ctx, next) => {
  const { authorization = '' } = ctx.request.header
  const token = authorization.replace('Bearer ', '')
  try {
    const user = jsonwebtoken.verify(token, secret)
    ctx.state.user = user
  } catch (error) {
    ctx.throw(401, error.message)
  }
  await next()
}
// 授权

router.get('/', find)

router.get('/:id', findById)

router.post('/', create)

router.patch('/:id', auth, checkOwner, update)

router.delete('/:id', auth, checkOwner, del)

router.post('/login', login)

module.exports = router
