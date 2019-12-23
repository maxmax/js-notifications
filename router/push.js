const path = require('path');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Subscription = mongoose.model('subscribers');
const q = require('q');
const webPush = require('web-push');
const keys = require('./../config/keys');
router.post('/', (req, res) => {
  const payload = {
    title: req.body.title,
    message: req.body.message,
    url: req.body.url,
    ttl: req.body.ttl,
    icon: req.body.icon,
    image: req.body.image,
    badge: req.body.badge,
    tag: req.body.tag
  };

  Subscription.find({}, (err, subscriptions) => {
    if (err) {
      console.error(`Error occurred while getting subscriptions`);
      res.status(500).json({
        error: 'Technical error occurred'
      });
    } else {
      let parallelSubscriptionCalls = subscriptions.map((subscription) => {

        // console.log('subscriptions______', subscriptions);

        return new Promise((resolve, reject) => {

          const pushSubscription = {
            endpoint: subscription.endpoint,
            keys: {
              p256dh: subscription.keys.p256dh,
              auth: subscription.keys.auth
            }
          };

          const pushPayload = JSON.stringify(payload);

          const pushOptions = {
            vapidDetails: {
              subject: 'mailto:test@example.com',
              privateKey: keys.privateKey,
              publicKey: keys.publicKey
            },
            TTL: payload.ttl,
            headers: {}
          };

          webPush.sendNotification(
            pushSubscription,
            pushPayload,
            pushOptions
          ).then((value) => {
            resolve({
              status: true,
              endpoint: subscription.endpoint,
              data: value
            });
          }).catch((err) => {
            reject({
              status: false,
              endpoint: subscription.endpoint,
              data: err
            });
          });
        });
      });
      q.allSettled(parallelSubscriptionCalls).then((pushResults) => {
        console.info(pushResults);
      });
      // response.json(request.body);
      res.json({
        data: 'Push triggered'
      });
      // res.send('Push triggered Test');
    }
  });
});

router.get('/', (req, res) => {

  const sendMessageForm = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>js notifications</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
      <section class="container" style="margin: 5% auto;">
        <div class="card">
          <div class="card-body">
            <h2>Push message</h2>
            <form id="sendMessage" action="/push" method="post">
              <div class="form-group">
                <label>Title</label>
                <input type="text" name="title" value="To do list" class="form-control">
              </div>
              <div class="form-group">
                <label>Message</label>
                <input type="text" name="message" value="welcome friends" class="form-control">
              </div>
              <div class="form-group">
                <label>Url</label>
                <input type="text" name="url" value="http://127.0.0.1:3000" class="form-control">
              </div>
              <div class="form-group">
                <label>Icon</label>
                <input type="text" name="icon" value="https://maxmax.github.io/rnbp/static/media/robot-dev.c6505b75.png" class="form-control">
              </div>
              <div class="form-group">
                <label>Badge</label>
                <input type="text" name="badge" value="https://maxmax.github.io/rnbp/static/media/robot-dev.c6505b75.png" class="form-control">
              </div>
              <div class="form-group">
                <label>Data</label>
                <input type="text" name="data" value="Hello World" class="form-control">
              </div>
              <br />
              <button type="submit" class="btn btn-primary btn-block" id="submit">Send Message</button>
            </form>
            <script>
              document.addEventListener('DOMContentLoaded', function(){
                let sendMessageForm = document.getElementById("sendMessage");
                document.getElementById("submit").addEventListener("click", function (e) {
                    e.preventDefault();
                    // get form data
                    let title = sendMessageForm.elements["title"].value;
                    let message = sendMessageForm.elements["message"].value;
                    let url = sendMessageForm.elements["url"].value;
                    let icon = sendMessageForm.elements["icon"].value;
                    let badge = sendMessageForm.elements["badge"].value;
                    let data = sendMessageForm.elements["data"].value;
                    // serialize data in json
                    let user = JSON.stringify({title, message, url, icon, badge, data});
                    let request = new XMLHttpRequest();
                    // send a request to the address "/push"
                    request.open("POST", "/push", true);
                    request.setRequestHeader("Content-Type", "application/json");
                    request.addEventListener("load", function () {
                      // we receive and parse the server response
                      let receivedMessage = JSON.parse(request.response);
                      console.log(receivedMessage);   // look at the server response
                    });
                    request.send(user);
                 });
              });
            </script>
          </div>
        </div>
      </section>
    </body>
  </html>`;
  // res.send(sendMessageForm);
  // res.sendFile(path.join(__dirname, '../build/push-message.html'));
  res.send(sendMessageForm);
});
module.exports = router;
