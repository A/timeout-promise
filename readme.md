[![Build Status](https://travis-ci.org/shuvalov-anton/promise-watcher.svg)](https://travis-ci.org/shuvalov-anton/promise-watcher)
[![Code Climate](https://codeclimate.com/github/shuvalov-anton/irverbs/badges/gpa.svg)](https://codeclimate.com/github/shuvalov-anton/promise-watcher)

## Timeout Promise

Simple util to check async changes that hasn't any callback API. Just dirty
checks based on promise `progress` triggered by intervals. Useful for banners
and adverts loaded optionaly.

### Install

```
npm install timeout-promise
``

### Example

```JS
var el = $('.js-adverts'); 
var promise = new Watcher({ 
  counter: 10, // after that attempts promis will be rejected
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
