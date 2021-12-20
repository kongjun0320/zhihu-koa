const Router = require('koa-router')
const { index, getCaptchaCode } = require('../controllers/home')

const router = new Router()

router.get('/', index)
router.get('/code', getCaptchaCode)

module.exports = router
