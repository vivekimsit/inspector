
var Class = {
  DATE: 'Date',
  STRING: 'String',
  NUMBER: 'Number',
  BOOLEAN: 'Boolean',
  ARRAY: 'Array'
};


function classOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}


function isString(obj) {
  return classOf(obj) == Class.STRING;
}


function isDate(obj) {
  return classOf(obj) == Class.DATE;
}


function isNumber(obj) {
  return !isNaN(obj) && classOf(obj) == Class.NUMBER;
}


function isBoolean(obj) {
  return classOf(obj) == Class.BOOLEAN;
}


function printNumber(obj) {
  return Number(obj).toString();
}


function printBoolean(obj) {
  return Boolean(obj).toString();
}


function printString(obj) {
  return JSON.stringify(String(obj));
}


function printDate(obj) {
  return 'new Date("' + obj.toISOString() + '")';
}


function printArray(maxDepth, ary) {
  return '[' +
      ary.map(function(obj) {
        return print(maxDepth - 1, obj);
      }).join(', ') + ']';
}


function printObject(maxDepth, obj) {
  var result = [];
  var val;
  for (var key in obj) {
    val = obj[key];
    result.push(printString(key) + ': ' + print(maxDepth - 1, val));
  }
  return '{' + result.join(', ') + '}';
}


function print(maxDepth, val) {
    return val === undefined ? 'undefined'
      :    val === null ? 'null'
      :    isNumber(val) ? printNumber(val)
      :    isBoolean(val) ? printBoolean(val)
      :    isString(val) ? printString(val)
      :    maxDepth <= 0 ? '(...)'
      :    isDate(val) ? printDate(val)
      :    Array.isArray(val) ? printArray(maxDepth, val)
      :    printObject(maxDepth , val);
}


module.exports = {
  inspect: function(opts) {
    var opts = opts || {};
    return print.bind(null, opts.maxDepth || 1);
  }
}
