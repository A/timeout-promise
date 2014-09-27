/* global define, module, jQuery */

(function(factory) {
  'use strict';
  // AMD support
  if (typeof define === 'function' && define.amd) { define(['jquery'], factory); } 
  // CommonJS support
  else if (typeof exports !== 'undefined') { module.exports = factory; } 
  // Non-modular execution
  else { factory(jQuery); }
})(function($) {
  'use strict';
  var Watcher = function (opts) {
    this.counter      = opts.counter || Infinity;
    this.interval     = opts.interval || 1000;
    this.deferred     = new $.Deferred();
    this.watch(this.interval, this.counter);
    return this.deferred;
  };
  Watcher.prototype.watch = function (interval, counts) {
    this.counter--;
    this.deferred.notify(this.deferred);
    this.counter > 0
      ? setTimeout(this.watch.bind(this), this.interval)
      : this.deferred.reject();
  };
  return Watcher;
});
