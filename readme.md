[![Build Status](https://travis-ci.org/rambler-digital-solutions/timeout-promise.svg?branch=master)](https://travis-ci.org/rambler-digital-solutions/timeout-promise)
[![Code Climate](https://codeclimate.com/github/shuvalov-anton/timeout-promise/badges/gpa.svg)](https://codeclimate.com/github/shuvalov-anton/timeout-promise)

[![NPM](https://nodei.co/npm/timeout-promise.png?downloads=true)](https://nodei.co/npm/timeout-promise/)

## Timeout Promise

Simple utility to check async changes that hasn't any callback API. Just dirty
checks based on promise `progress` triggered by intervals. Useful for banners
and advertisement loaded optionally.

### Install

```
npm install timeout-promise
```

### Example

```JS
var el = $('.js-adverts'); 
var promise = new Watcher({ 
  counter: 10, // promise will be rejected after that number of attempts 
  interval: 1000 // interval in ms to trigger .progress callback
});

promise
  .progress(function (promise) {
    // if somthing is loaded
    $el.find('.banner').length
      && promise.resolve();
  })
  .done(function() {
    $el.show();
  })
  .fail(function() {
    $el.remove();
  });
```
