const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT
const app = express()
// look for static files in the public folder
app.use(express.static('public'))

// Express session and passport
const session = require('express-session')
const passport = require('./helper/ppConfig')

// set up session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 36000000 }
}))

// set up passport
app.use(passport.initialize())
app.use(passport.session())

//Sharing the information with all pages
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
})
// ------------------------------------------------------------------------------------------------------------

// import routes
const appointmentRoute = require('./routes/appointment')
const recordRoute = require('./routes/record')
const medicineRoute = require('./routes/medicine')
const profileRoute = require('./routes/profile')
// // const collegeRoutes = require('./routes/college')
const authRoute = require('./routes/auth')

// // mount routes
app.use('/', appointmentRoute)
app.use('/', recordRoute)
app.use('/', medicineRoute)
app.use('/', profileRoute)
// // app.use('/', collegeRoutes)
app.use('/', authRoute)


// ------------------------------------------------------------------------------------------------------------
// set view engine to ejs
// app.set('view engine', 'ejs')

mongoose.set('strictQuery', false)
try {
 mongoose.connect(
  process.env.mongoDB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('DB connected successfully')
  }
);
}
catch(error) {
  console.log(error);
}

app.listen(port, () => {
  console.log(`Health Tracker App listening at http://localhost:${port}`)
})

// try {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');
// } catch (error) {
//   handleError(error);
// }