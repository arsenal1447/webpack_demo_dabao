var path = require('path');

module.exports = {
  entry :{    
    admin:'./admin/index.js',
    cousumer:'./cousumer/index.js'
  },
  output:{
    path:path.join(__dirname,'dist'),
    filename:'[name].bubdle.js'
  }
}
