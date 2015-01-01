
var Class = {
  STRING: 'String',
  NUMBER: 'Number',
  BOOLEAN: 'Boolean',
  ARRAY: 'Array'
};


function classOf(obj) {
  return Object.prototype.toString.call(obj);
}


function isString(obj) {
  return classOf(obj) == Class.STRING;
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


function printArray(ary) {
  var result = [];
  ary.map(function(obj) {
    result.push(obj === undefined ? 'undefined'
    :         obj === null ? 'null'
    :         isNumber(obj) ? printNumber(obj)
    :         Array.isArray(obj) ? printArray(obj)
    :         obj.toString());
  });
  return '[' + result + ']';
}


console.log(printArray([1, 'a', 3, ['b', 5, [6]] ]));
