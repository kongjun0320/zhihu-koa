const svgCaptcha = require('svg-captcha')

class HomeCtl {
  index(ctx) {
    ctx.body = `<h1>This is a Home page</h1>`
  }
  getCaptchaCode(ctx) {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 120,
      height: 34,
      background: '#cc9966'
    })
    ctx.response.type = 'image/svg+xml'
    ctx.body = captcha.data
  }
}

module.exports = new HomeCtl()
