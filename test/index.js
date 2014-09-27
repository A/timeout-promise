'use strict';

var env = require('jsdom').env;
var html = '<html><body><h1>Hello World!</h1><p class="hello">Heya Big World!</body></html>';
var $ = require('jquery');
var watcherFabr = require('../index');

describe('Watcher', function () {
  var Watcher;
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

  describe('timeout', function () {
    var deferred;
    it('should reject defered', function (done) {
       deferred = new Watcher({ counter: 3, interval: 100 });
       deferred.fail(function() { done(); });
    });
  });

  describe('resolve', function() {
    var obj = {};
    var deferred;
    it('should resolve deferred manualy', function (done) {
      deferred = new Watcher({ counter: 5, interval: 100 });
      deferred
        .progress(function (deferred) {
          if ('prop' in obj) { deferred.resolve(); }
        })
        .done(function(){ done(); });
      setTimeout(function () {
        obj.prop = 'fuck yeah!11';
      }, 200);
    });
  });
});
