const traverse = require('./traverse');
module.exports = function transformer(originalAST) {
  const jsAST = {
    type: 'Program',
    body: []
  };

  traverse(originalAST, {
    NumberLiteral(node) {
    }
  });

  return jsAST;
}