const path = require('path')

module.exports = {
  entry: './src/index.js', //arquivo de entrada 
  output: {
    path: path.resolve(__dirname, 'dist'), //path: modulo do node que trabalha com diretŕoios  -alteração dpo nome do output-
    filename: 'bundle.js'
  }
}