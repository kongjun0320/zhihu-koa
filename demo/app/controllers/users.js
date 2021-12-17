const db = [
  {
    name: 'tom'
  }
]

class UsersCtl {
  find(ctx) {
    ctx.body = db
  }
  findById(ctx) {
    ctx.body = db[ctx.params.id]
  }
  create(ctx) {
    const reqBody = ctx.request.body
    db.push(reqBody)
    ctx.body = reqBody
  }
  update(ctx) {
    const reqBody = ctx.request.body
    db[ctx.params.id] = reqBody
    ctx.body = reqBody
  }
  delete(ctx) {
    db.splice(ctx.params.id, 1)
    ctx.status = 204
  }
}

module.exports = new UsersCtl()
