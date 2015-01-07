
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
  return String(obj).toString();
}


function printDate(obj) {
  return 'new Date("' + obj.toISOString() + '")';
}


function printArray(maxDepth, ary) {
  if (maxDepth === 0) {
    return '[...]';
  }
  var result = [];
  ary.map(function(obj) {
    result.push(obj === undefined ? 'undefined'
    :         obj === null ? 'null'
    :         isNumber(obj) ? printNumber(obj)
    :         isBoolean(obj) ? printBoolean(obj)
    :         isString(obj) ? printString(obj)
    :         Array.isArray(obj) ? printArray(maxDepth - 1, obj)
    :         obj.toString());
  });
  return '[' + result + ']';
}


function printObject(maxDepth, obj) {
  if (maxDepth === 0) {
    return '{...}';
  }
  var result = '{';
  for (var key in obj) {
    var val = obj[key];
    result += key + ': ';
    result += val === undefined ? 'undefined'
      :       val === null ? 'null'
      :       isNumber(val) ? printNumber(val)
      :       isBoolean(val) ? printBoolean(val)
      :       isString(val) ? printString(val)
      :       Array.isArray(val) ? printArray(val)
      :       printObject(maxDepth - 1, val);
    result += ',';
  }
  return result + '}';
}


function print(maxDepth, val) {
    return val === undefined ? 'undefined'
      :    val === null ? 'null'
      :    isNumber(val) ? printNumber(val)
      :    isBoolean(val) ? printBoolean(val)
      :    isString(val) ? printString(val)
      :    isDate(val) ? printDate(val)
      :    Array.isArray(val) ? printArray(3, val)
      :    printObject(3, val);
}


module.exports = {
  inspect: function(val) {
    return print(3, val);
  }
}
