const Router = require('koa-router')
const { index, getCaptchaCode, upload } = require('../controllers/home')

const router = new Router()

router.get('/', index)
router.get('/code', getCaptchaCode)
router.post('/upload', upload)

module.exports = router
