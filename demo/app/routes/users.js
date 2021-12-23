const Router = require('koa-router')
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
const auth = jwt({ secret })
// 授权

router.get('/', find)

router.get('/:id', findById)

router.post('/', create)

router.patch('/:id', auth, checkOwner, update)

router.delete('/:id', auth, checkOwner, del)

router.post('/login', login)

module.exports = router
