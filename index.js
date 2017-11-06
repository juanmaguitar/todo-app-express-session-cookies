const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')
const cookieSession = require('cookie-session')
const debug = require('debug')('middleware-log')
const flash = require('connect-flash')

require('dotenv').load()

const app = express()

const routes = require('./routes')
const { setTasks } = require('./services/tasks')

app.set('view engine', 'pug')
app.locals.moment = moment

app.use(express.static('public'))

app.use(cookieSession({
  name: 'jm-cookie-session',
  keys: ['20a69e67-7632-4650-9583-eeec24b276f0']
}))

app.use(flash());

app.use((req, res, next) => {
  req.session.tasks = req.session.tasks || []
  setTasks(req.session.tasks)
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use( (req,res,next) => {
  const { method, path, body } = req
  debug({ method, path, body })
  next()
})

app.use(routes)

app.listen(3000)
console.log('Listening on PORT 3000...');