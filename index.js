
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
  return classOf(obj) == Class.NUMBER;
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
  if (maxDepth === 0) {
    return '[...]';
  }
  return '[' +
      ary.map(function(obj) {
        return print(maxDepth - 1, obj);
      }).join(', ') + ']';
}


function printObject(maxDepth, obj) {
  if (maxDepth === 0) {
    return '{...}';
  }
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
      :    isDate(val) ? printDate(val)
      :    Array.isArray(val) ? printArray(3, val)
      :    printObject(maxDepth - 1 , val);
}


module.exports = {
  inspect: function(val) {
    return print(3, val);
  }
}
