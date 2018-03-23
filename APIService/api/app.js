const express = require('express');
const morgan = require('morgan');
const twillio = require('twilio');
const app = express();

app.use(morgan('common'));
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.get('/sms/reply/', function (req, res) {
  var message = req.query.Body;
  var number = req.query.From;
  var twilioNumber = req.query.To;

  var context = null;
  var index = 0;
  var contextIndex = 0;
  contexts.forEach(function(value) {
    console.log(value.from);
    if (value.from == number) {
      context = value.context;
      contextIndex = index;
    }
    index = index + 1;
  });

  console.log('Received message from ' + number + ' saying \'' + message  + '\'');

  var conversation = new ConversationV1({
    username: '',
    password: '',
    version_date: ConversationV1.VERSION_DATE_2016_09_20
  });

  console.log(JSON.stringify(context));
  console.log(contexts.length);

  var client = twillio(
    '',
    ''
  );

  client.messages.create({
    from: twilioNumber,
    to: number,
    body: response.output.text[0]
  }, function(err, message) {
    if(err) {
      console.error(err.message);
    }
  });

  res.send('');
});

module.exports = app;