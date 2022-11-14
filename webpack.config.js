const { SourceCode } = require('eslint');
const path = require('path');

module.exports = {
  //...
  resolve: {
    alias: {
        // Components: path.resolve(__dirname, 'src/components/'),
        components: path.resolve(__dirname, './src/components'),
        hooks: path.resolve(__dirname, './hooks/api')
    },
    extensions: ['', '.js', '.tsx','.ts']
  },
};