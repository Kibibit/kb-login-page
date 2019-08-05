'use strict';
const url = require('url');
const _ = require('lodash');
const nconf = require('nconf');
const flash = require('connect-flash');
const session = require('express-session');
const express = require('express');

nconf.argv()
.env({
  lowerCase: true,
  parseValues: true,
  transform: (obj) => {
    const isCamelCaseConvertable = /[A-Za-z0-9]+/gm.test(obj.key);

    return {
      key: isCamelCaseConvertable ? _.camelCase(obj.key) : obj.key,
      value: obj.value
    };
  }
})
.required(['kbLoginUrl', 'kbApp'])

console.log(nconf.get());

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('view engine', 'html');
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(flash());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler);

const loginUrlObj = url.parse(nconf.get('kbLoginUrl'), true);

const loginUrl = url.format({
  ...loginUrlObj,
  search: undefined,
  query: {
    success: loginUrlObj.query.success || '/',
    failure: loginUrlObj.query.failure || '/'
  }
});

app.get('/', (req, res) => {
  const message = req.flash('error').map((msg) => marked(msg));
  res.render('login.ejs', {
    user: req.user,
    message: message,
    loginUrl: loginUrl,
    applicationName: nconf.get('kbApp'),
    applicationIcon: nconf.get('kbIcon') || 'https://image.flaticon.com/icons/svg/119/119595.svg'
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error.ejs', { error: err, statusCode: 500 });
}
