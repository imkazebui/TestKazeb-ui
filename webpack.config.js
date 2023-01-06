const { SourceCode } = require('eslint');
const path = require('path');

module.exports = {
  //...
  resolve: {
    alias: {
        // Components: path.resolve(__dirname, 'src/components/'),
        components: path.resolve(__dirname, './src/components'),
        constants: path.resolve(__dirname, './src/constants'),
        modules: path.resolve(__dirname, './src/modules'),
        hooks: path.resolve(__dirname, './hooks/api')
    },
    extensions: ['', '.js', '.tsx','.ts']
  },
};