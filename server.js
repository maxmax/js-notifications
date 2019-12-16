require('dotenv').config({ path: '.env' });
const express = require('express');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
// const cors = require('cors')

const app = express();

app.get("/", (req, res) => res.send("App!"));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(cors())

app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'build')));

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webPush.setVapidDetails('mailto:test@example.com', publicVapidKey, privateVapidKey);

// Subscribe route

app.post('/subscribe', (req, res) => {
  const subscription = req.body

  res.status(201).json({});

  // create payload
  const payload = JSON.stringify({
    title: 'Push notifications with Service Workers',
    options: {
      body: 'HEY! Your sw task is now overdue.',
      icon: 'https://maxmax.github.io/rnbp/static/media/robot-prod.2ec19ca0.png',
    }
  });

  webPush.sendNotification(subscription, payload)
    .catch(error => console.error(error));
});

app.set('port', process.env.PORT || 3030);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
