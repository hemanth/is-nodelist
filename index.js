'use strict';
var isObject = require('is-object');
var isArguments = require('is-arguments');
var toStr = Object.prototype.toString;
module.exports = function(nodes) {
  var construct = toStr.call(nodes);
  return !isArguments(object) && isObject(nodes) &&
    /^\[object (HTMLCollection|NodeList)\]$/.test(construct) &&
    nodes.length !== undefined &&
    (nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType >
      0));
};
