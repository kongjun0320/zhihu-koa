const Router = require('koa-router')
const {
  find,
  findById,
  create,
  update,
  delete: del
} = require('../controllers/users')
const router = new Router({ prefix: '/users' })

router.get('/', find)

router.get('/:id', findById)

router.post('/', create)

router.patch('/:id', update)

router.delete('/:id', del)

module.exports = router
