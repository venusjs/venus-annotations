var fs   = require('fs');
var path = require('path');

module.exports = {
  fixture: function () {
    var args = Array.prototype.slice.call(arguments, 0);
    var filename;

    args.unshift(__dirname, '..', 'fixtures');
    filename = path.resolve.apply(this, args);

    return fs.readFileSync(filename, 'utf-8');
  }
};
