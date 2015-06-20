'use strict';
module.exports = function(nodes) {
  var construct = {}.toString.call(nodes);
  return typeof nodes === 'object' &&
    /^\[object (HTMLCollection|NodeList|Object)\]$/.test(construct) &&
    nodes.length !== undefined &&
    (nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType >
      0));
};
