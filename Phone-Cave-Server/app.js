const express = require('express');
const logger = require('morgan');

const cors = require('cors')
const mongoose = require('mongoose')

const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth')
const phoneRouter = require('./routes/phone')
 
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('trust proxy', 1);
app.enable('trust proxy');

// app.use(
//     cors({
//       origin: [process.env.REACT_APP_URI]  // <== URL of our future React app
//     })
//   );

app.use(
    cors()
  );

app.use('/users', usersRouter);
app.use('/auth', authRouter)
app.use('/phones', phoneRouter)

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then((x) =>
    console.log(
      `Connected to Mongo 🥭! Database name: "${x.connections[0].name}"`
    )
  )
  .catch((err) => console.error("Error connecting to mongo", err));

module.exports = app;
