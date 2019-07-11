require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  // presets: ['@babel/preset-env'],
  extensions: ['.js', '.ts', '.json'],
});

console.time('excute');
require('./example/2 - Promise');
// require('./example/4 - npm包');
// require('./example/5 - Vue');
console.timeEnd('excute');
