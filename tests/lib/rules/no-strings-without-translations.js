/**
 * @fileoverview All strings should have translations
 * @author Ron Lavi
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-strings-without-translations'),
  RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('no-strings-without-translations', rule, {
  valid: [
    `
    import React from 'react';
    const __ = str => str;
    const component = () => (
      <p>{__('hello world')}</p>
  );`,
  ],

  invalid: [
    {
      code: `import React from 'react';
      const component = () => (
        <p>hello world</p>
    );`,
      errors: [
        {
          message: '"hello world" should be translated',
          type: 'JSXElement',
        },
      ],
    },
  ],
});
