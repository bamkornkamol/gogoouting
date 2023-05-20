const express = require("express")
var cors = require('cors')
const path = require("path")

const app = express();
app.use(cors())
// Statics
app.use(express.static('static'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routers
const indexRouter = require('./routes/index')
const postUserRouter = require('./routes/post_User')
const putUserRouter = require('./routes/put_User')
const delUserRouter = require('./routes/del_User')
const indexAdminRouter = require('./routes/index_admin')
const adminRouter = require('./routes/admin')
const uploadRouter = require('./routes/upload_data')

app.use(indexRouter.router)
app.use(postUserRouter.router)
app.use(putUserRouter.router)
app.use(delUserRouter.router)
app.use(indexAdminRouter.router)
app.use(adminRouter.router)
app.use(uploadRouter.router)

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})