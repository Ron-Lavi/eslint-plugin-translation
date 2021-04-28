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

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      JSXElement: function (node) {
        node.children.forEach(function (JSXText) {
          if (!JSXText.value) return;

          const term = JSXText.value.trim();
          /** Can use better regex here */
          if (term.length > 1 && term !== '\n') {
            context.report(node, `"${term}" should be translated`);
          }
        });
      },
      VariableDeclarator: function (node) {
        const term = node.init && node.init.value;
        const isConstantsFile = context
          .getFilename()
          .toLowerCase()
          .includes('const');

        if (!term || isConstantsFile) return;

        if (typeof term === 'string') {
          context.report(node, `"${term}" should be translated`);
        }
      },
    };
  },
};
