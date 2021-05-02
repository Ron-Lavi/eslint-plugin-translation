/**
 * @fileoverview find all the strings that have no translations
 * @author Ron Lavi
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex');
var rule = require('./rules/no-strings-without-translations');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
module.exports = {
  rules: {
    'no-strings-without-translation': rule,
  },
};

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + '/rules');
