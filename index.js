var erm = require('erm');
var names = require('american-sounding-names');

var first = ermify(names.first);
var last = ermify(names.last);

names = ermify(names);
names.first = first;
names.last = last;

module.exports = names;

function ermify (fn) {
	return function () {
    return erm(fn.apply(this, arguments));
  }
}
