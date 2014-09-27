[![Build Status](https://travis-ci.org/shuvalov-anton/promise-watcher.svg)](https://travis-ci.org/shuvalov-anton/promise-watcher)
[![Code Climate](https://codeclimate.com/github/shuvalov-anton/irverbs/badges/gpa.svg)](https://codeclimate.com/github/shuvalov-anton/promise-watcher)

# Moved

Please use [timeout-promise](https://www.npmjs.org/package/timeout-promise)

## Promise Watcher

Simple wrapper to flow control promises.


### Install

```
npm i -S promise-watcher
```

### Example

```JS
var promise = new Watcher({ 
  observable: $('.js-super-banners'), 
  counter: 10,
  interval: 1000
});

promise
  .progress(function ($el, promise) {
    // if somthing is loaded
    $el.find('.banner').length
      && promise.resolve($el);
  })
  .done(function($el) {
    $el.show();
  })
  .fail(function($el) {
    $el.remove();
  });
```
