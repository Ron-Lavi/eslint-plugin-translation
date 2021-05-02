/**
 * @fileoverview All strings should have translations
 * @author Ron Lavi
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'strings should be translated',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    function handleTerm(node, value) {
      if (!value || typeof value !== 'string') return;

      const term = value.trim();
      if (term.length > 1 && term !== '\n') {
        context.report(node, `"${term}" should be translated`);
      }
    }
    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      JSXElement: function (node) {
        node.children.forEach(function (JSXText) {
          handleTerm(node, JSXText.value);
        });
      },
      VariableDeclarator: function (node) {
        node.init && handleTerm(node, node.init.value);
      },
    };
  },
};
