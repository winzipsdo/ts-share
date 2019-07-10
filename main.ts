require('@babel/register')({
  presets: ['@babel/preset-env'],
  extensions: ['.js', '.ts', '.json'],
});

// require('./example/2 - Promise');
// require('./example/4 - Vue');
require('./example/5 - $refs');
