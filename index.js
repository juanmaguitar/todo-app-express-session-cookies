const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
const debug = require('debug')('middleware-log')
const flash = require('connect-flash')

require('dotenv').load()

const app = express()

const routes = require('./routes')
const { setTasks } = require('./services/tasks')

app.set('view engine', 'pug')
app.locals.moment = moment

app.use(express.static('public'))

const store = new MongoDBStore({
  uri: process.env.URL_DB,
  collection: process.env.COLLECTION_SESSIONS
})

app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  store: store
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