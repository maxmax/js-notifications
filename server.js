const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./model/subscribers_model');
const keys = require('./config/keys');

//Handlebars Helpers
mongoose.Promise = global.Promise;

// Mongoose Connect
mongoose.connect(keys.mongoURI, {
    // useMongoClient: true
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const app = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('trust proxy', true);
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// Set static folder
// app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'build')));
// app.set('views', __dirname + '/public/js');

// Set global vars
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// Use Routes

app.use(require('./router'));
// app.get("/", (req, res) => res.send("App!"));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
