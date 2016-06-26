var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<b>Hello, We are the BADGES TEAM!!</b>');
});

app.get('/a1.js', function (req, res) {
  res.redirect('https://docs.google.com/forms/d/13yltsdjxoYuMwEynAuqtPXaNma9Xr8nUxxvrN_ucrcE/viewform?c=0&w=1');
});

app.get('/a2.js', function (req, res) {
  res.redirect('https://docs.google.com/forms/d/1v35BsO44_aLo4QjUADSbHDfL8OnSID-Qv1ioi8HVh3o/viewform?c=0&w=1');
});

app.get('/a3.js', function (req, res) {
  res.redirect('https://docs.google.com/forms/d/1KgeBTnzoPIEbqzk7UtCO5oV0DiCygegK1w5RFEaAzhw/viewform?c=0&w=1');
});

app.listen(80, function () {
  console.log('badges-app listening on port 80!');
});
