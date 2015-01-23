var through2 = require('through2');

module.exports = function(){
  return through2.obj(function(chunk, enc, cb){
    var err = null;

    try {
      chunk = JSON.stringify(chunk);
    } catch (error) {
      err = error;
      chunk = null;
    }

    cb(err, chunk);
  });
};