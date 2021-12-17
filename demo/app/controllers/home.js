class HomeCtl {
  index(ctx) {
    ctx.body = `<h1>This is a Home page</h1>`
  }
}

module.exports = new HomeCtl()
