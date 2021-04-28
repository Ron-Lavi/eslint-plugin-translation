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
    const component = () => {
      const a = __('some-text')
      return(
        <div><p>{__('hello world')}</p><p>(</p></div>
      );
    }`,
  ],

  invalid: [
    {
      code: `import React from 'react';
      const component = () => {
        const a = 'some-text'
        return(
          <div><p>hello world</p></div>
        );
      }`,
      errors: [
        {
          message: '"some-text" should be translated',
          type: 'VariableDeclarator',
        },
        {
          message: '"hello world" should be translated',
          type: 'JSXElement',
        },
      ],
    },
  ],
});
