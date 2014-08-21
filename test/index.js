'use strict';

var env = require('jsdom').env;
var html = '<html><body><h1>Hello World!</h1><p class="hello">Heya Big World!</body></html>';
var $ = require('jquery');
var watcherFabr = require('../index');

var obj = {};
var deferred = null;
var Watcher = null;

describe('Watcher', function () {
  before(function (done) {
    env(html, function (err, window) {
      $ = $(window);
      Watcher = watcherFabr($);
      done(err);
    });
  });

  it('should be constructor', function () {
    Watcher.should.be.type('function');
  });

  it('should reject defered', function (done) {
     deferred = new Watcher({ observable: obj, counter: 3, interval: 100 });
     deferred.fail(function() { done(); });
  });

  it('should resolve deferred manualy', function (done) {
    deferred = new Watcher({ observable: obj, counter: 5, interval: 100 });
    deferred
      .progress(function (obj, deferred) {
        if ('prop' in obj) { deferred.resolve(); }
      })
      .done(function(){ done(); });
    setTimeout(function () {
      obj.prop = 'fuck yeah!11';
    }, 200);
  });
});
